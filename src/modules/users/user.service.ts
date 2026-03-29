import { eq } from 'drizzle-orm';
import { db } from '../../db';
import { newUserReturn, user, Users } from '../../db/schema';
import { AppError } from '../../utils/appErro';
import { hashPassword } from '../../utils/bcrypt';
import { getUserBy } from '../../utils/query';
import { userSafeFields } from './user.select';
export const getUsersServices = async (): Promise<newUserReturn[]> => {
  const allUsers = await db.select(userSafeFields).from(Users);
  return allUsers;
};

export const getUserServices = async (
  id: number,
): Promise<newUserReturn | null> => {
  const [user] = await db
    .select(userSafeFields)
    .from(Users)
    .where(eq(Users.id, id));
  return user ?? null;
};

export const createUserServices = async (
  payload: user,
): Promise<newUserReturn | undefined> => {
  // if payload property are missing throw error
  if (!payload.email) throw new AppError(400, 'Email is required');
  if (!payload.dateOfBirth) throw new AppError(400, 'Date of birth required');
  if (!payload.name) throw new AppError(400, 'Name is required');
  if (!payload.password) throw new AppError(400, 'Password is required');

  // finding user
  const isExist = await getUserBy({ email: payload.email });
  const hashPass = hashPassword(payload.password);

  // create a blue print for new user
  const createUser: user = {
    ...payload,
    dateOfBirth: new Date(payload.dateOfBirth),
    role: payload?.role || 'USER',
    password: hashPass,
  };

  // if have a user then throw an error
  if (isExist) throw new AppError(400, 'Email already exist');
  const [user] = await db
    .insert(Users)
    .values(createUser)
    .returning(userSafeFields);

  return user;
};

import { db } from '../config/db';
import { users } from '../models/user.model';

export const createUser = async (data: any) => {
  const result = await db.insert(users).values(data).returning();
  return result;
};

export const getUser = async () => {
  return await db.select().from(users);
};

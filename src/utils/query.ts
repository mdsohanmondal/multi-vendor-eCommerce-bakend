import { eq } from 'drizzle-orm';
import { db } from '../db';
import { user, Users } from '../db/schema';

export async function getUserBy({
  email,
  id,
}: {
  email?: string;
  id?: number;
}): Promise<user | undefined> {
  if (email) {
    const user = await db.query.Users.findFirst({
      where: eq(Users.email, email),
    });
    return user;
  }
  if (id) {
    const user = await db.query.Users.findFirst({
      where: eq(Users.id, id),
    });
    return user;
  }
}

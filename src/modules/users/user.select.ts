import { PgTableExtraConfig } from 'drizzle-orm/pg-core';
import { Users } from '../../db/schema';

export const userSafeFields = {
  dateOfBirth: Users.dateOfBirth,
  email: Users.email,
  phone: Users.phone,
  name: Users.name,
  role: Users.role,
  id: Users.id,
};

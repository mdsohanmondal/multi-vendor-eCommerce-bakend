import { pgTable, serial, text, pgEnum, timestamp } from 'drizzle-orm/pg-core';

export const userRole = pgEnum('userRole', ['ADMIN', 'VENDOR', 'USER']);
export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  phone: text('phone'),
  password: text('password').notNull(),
  role: userRole('user_role').notNull().default('USER').notNull(),
  dateOfBirth: timestamp('date_of_birth').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type user = typeof Users.$inferSelect;
export type newUser = typeof Users.$inferInsert;
export type newUserReturn = Omit<user, 'password' | 'createdAt' | 'updatedAt'>;

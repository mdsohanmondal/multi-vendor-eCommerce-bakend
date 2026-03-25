import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const Categories = pgTable('categories', {
  id: serial('id').primaryKey(),

  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  image: text('image'),

  isActive: boolean('is_active').default(true),
  displayOrder: serial('display_order'),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Category = typeof Categories.$inferSelect;
export type NewCategory = typeof Categories.$inferInsert;

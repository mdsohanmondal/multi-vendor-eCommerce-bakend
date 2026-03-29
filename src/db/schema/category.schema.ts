import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  jsonb,
  integer,
} from 'drizzle-orm/pg-core';
import { Attribute } from '../../types/product.type';
/* ------------------ Categories ------------------ */
export const Categories = pgTable('categories', {
  id: serial('id').primaryKey(),

  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  image: text('image'),

  isActive: boolean('is_active').default(true),
  displayOrder: integer('display_order').default(0), // serial replaced by integer for ordering control

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Category = typeof Categories.$inferSelect;
export type NewCategory = typeof Categories.$inferInsert;

/* ------------------ Subcategories ------------------ */
export const Subcategories = pgTable('subcategories', {
  id: serial('id').primaryKey(),

  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),

  parentCategoryId: integer('parent_category_id').notNull(), // relation to Categories.id
  description: text('description'),
  image: text('image'),

  isActive: boolean('is_active').default(true),
  displayOrder: integer('display_order').default(0),

  attributes: jsonb('attributes').$type<Attribute>(),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Subcategory = typeof Subcategories.$inferSelect;
export type NewSubcategory = typeof Subcategories.$inferInsert;

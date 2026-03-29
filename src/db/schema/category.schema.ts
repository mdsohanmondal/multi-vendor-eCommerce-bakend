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

/* =========================================================
   CATEGORIES
========================================================= */

export const Categories = pgTable('categories', {
  id: serial('id').primaryKey(),

  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),

  description: text('description'),
  image: text('image'),

  isActive: boolean('is_active').default(true),
  displayOrder: integer('display_order').default(0),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type CategoryEntity = typeof Categories.$inferSelect;
export type NewCategoryEntity = typeof Categories.$inferInsert;

/* =========================================================
   SUBCATEGORIES
========================================================= */

export const Subcategories = pgTable('subcategories', {
  id: serial('id').primaryKey(),

  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),

  parentCategoryId: integer('parent_category_id')
    .notNull()
    .references(() => Categories.id), // ✅ relation

  description: text('description'),
  image: text('image'),

  isActive: boolean('is_active').default(true),
  displayOrder: integer('display_order').default(0),

  attributes: jsonb('attributes').$type<Attribute[]>(),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type SubcategoryEntity = typeof Subcategories.$inferSelect;
export type NewSubcategoryEntity = typeof Subcategories.$inferInsert;

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
export const Subcategories = pgTable('subcategories', {
  id: serial('id').primaryKey(),

  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),

  parentCategoryId: integer('parent_category_id').notNull(), // relation
  description: text('description'),
  image: text('image'),

  isActive: boolean('is_active').default(true),
  displayOrder: serial('display_order'),

  attributes: jsonb('attributes').$type<Attribute>(), // key-value attribute mapping

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Subcategory = typeof Subcategories.$inferSelect;
export type NewSubcategory = typeof Subcategories.$inferInsert;

import {
  integer,
  timestamp,
  boolean,
  jsonb,
  text,
  pgTable,
  serial,
} from 'drizzle-orm/pg-core';
type ProductImage = {
  url: string;
};

export type Attributes = Record<string, string | number | string[]>;
export const Products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('text').notNull(),
  slug: text('slug').notNull(),
  description: text('description').notNull(),
  price: integer('price').notNull(),
  comparePrice: integer('compare_price').notNull(),
  costPrice: integer('cost_price').notNull(),
  sku: text('sku').notNull(),
  stock: text('stock').notNull(),
  images: jsonb('images').$type<ProductImage[]>().notNull(),
  attributes: jsonb('attributes').$type<Attributes>(),
  rating: integer('rating').default(0),
  totalReviews: integer('total_reviews').default(0),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});

export type product = typeof Products.$inferSelect;
export type newProduct = typeof Products.$inferInsert;

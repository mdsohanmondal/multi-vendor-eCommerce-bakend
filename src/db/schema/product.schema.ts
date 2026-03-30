import {
  integer,
  timestamp,
  boolean,
  jsonb,
  text,
  pgTable,
  serial,
} from 'drizzle-orm/pg-core';
import {
  Attribute,
  Dimensions,
  MetaData,
  ProductImage,
  StockStatus,
} from '../../types/product.type';
import { Categories, Subcategories } from './category.schema';
import { Vendors } from './vendor.schema';

/* ------------------ Table ------------------ */

export const Products = pgTable('products', {
  id: serial('id').primaryKey(),

  /* Basic Info */
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  description: text('description'),
  shortDescription: text('short_description'),

  /* Relations */
  vendorId: integer('vendor_id')
    .notNull()
    .references(() => Vendors.id),
  categoryId: integer('category_id')
    .notNull()
    .references(() => Categories.id),

  subcategoryId: integer('subcategory_id')
    .notNull()
    .references(() => Subcategories.id),

  /* Pricing */
  price: text('price'),
  regularPrice: text('regular_price'),
  salePrice: text('sale_price'),

  /* Inventory */
  sku: text('sku'),
  stockQuantity: integer('stock_quantity'),
  stockStatus: text('stock_status', {
    enum: ['in_stock', 'out_of_stock', 'low_stock', 'preorder'],
  }).default('in_stock'),

  /* Product Data */
  images: jsonb('images').$type<ProductImage[]>(),
  attributes: jsonb('attributes').$type<Attribute[]>(),
  dimensions: jsonb('dimensions').$type<Dimensions>(),

  /* Flags */
  isActive: boolean('is_active').default(true),
  featured: boolean('featured').default(false),

  /* Review */
  averageRating: text('average_rating').default('0'),
  ratingCount: integer('rating_count').default(0),

  /* Extra */
  metaData: jsonb('meta_data').$type<MetaData[]>(),

  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type ProductEntity = typeof Products.$inferSelect;
export type NewProductEntity = typeof Products.$inferInsert;

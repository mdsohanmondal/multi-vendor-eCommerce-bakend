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
  Category,
  Dimensions,
  MetaData,
  ProductImage,
  Tag,
} from '../../types/product.type';

/* ------------------ Table ------------------ */

export const Products = pgTable('products', {
  id: serial('id').primaryKey(),

  /* Basic Info */
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  permalink: text('permalink'),

  description: text('description'),
  shortDescription: text('short_description'),

  /* Type & Status */
  type: text('type').default('simple'), // simple, variable, grouped
  status: text('status').default('draft'), // publish, draft
  featured: boolean('featured').default(false),
  catalogVisibility: text('catalog_visibility').default('visible'),

  /* Pricing */
  price: text('price'),
  regularPrice: text('regular_price'),
  salePrice: text('sale_price'),

  salePriceFrom: timestamp('sale_price_from'),
  salePriceTo: timestamp('sale_price_to'),

  /* Inventory */
  sku: text('sku'),
  manageStock: boolean('manage_stock').default(false),
  stockQuantity: integer('stock_quantity'),
  stockStatus: text('stock_status').default('instock'),
  backorders: text('backorders').default('no'),
  soldIndividually: boolean('sold_individually').default(false),

  /* Shipping */
  weight: text('weight'),
  dimensions: jsonb('dimensions').$type<Dimensions>(),
  shippingRequired: boolean('shipping_required').default(true),
  shippingTaxable: boolean('shipping_taxable').default(true),
  shippingClass: text('shipping_class'),
  shippingClassId: integer('shipping_class_id'),

  /* Tax */
  taxStatus: text('tax_status').default('taxable'),
  taxClass: text('tax_class'),

  /* Reviews */
  reviewsAllowed: boolean('reviews_allowed').default(true),
  averageRating: text('average_rating').default('0'),
  ratingCount: integer('rating_count').default(0),

  /* Relations (JSON based for flexibility) */
  categories: jsonb('categories').$type<Category[]>(),
  tags: jsonb('tags').$type<Tag[]>(),
  images: jsonb('images').$type<ProductImage[]>(),

  attributes: jsonb('attributes').$type<Attribute[]>(),
  defaultAttributes: jsonb('default_attributes').$type<Attribute[]>(),

  variations: jsonb('variations').$type<number[]>(),
  groupedProducts: jsonb('grouped_products').$type<number[]>(),

  upsellIds: jsonb('upsell_ids').$type<number[]>(),
  crossSellIds: jsonb('cross_sell_ids').$type<number[]>(),

  parentId: integer('parent_id'),

  /* Extra */
  purchaseNote: text('purchase_note'),
  menuOrder: integer('menu_order').default(0),
  metaData: jsonb('meta_data').$type<MetaData[]>(),

  /* Multi Vendor */
  vendorId: integer('vendor_id'),
  vendorStoreId: integer('vendor_store_id'),
  vendorCommission: text('vendor_commission'),
  vendorShippingProfile: text('vendor_shipping_profile'),
  productApprovalStatus: text('product_approval_status').default('pending'),
  vendorVisibility: boolean('vendor_visibility').default(true),

  /* System */
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

/* ------------------ Types ------------------ */

export type Product = typeof Products.$inferSelect;
export type NewProduct = typeof Products.$inferInsert;

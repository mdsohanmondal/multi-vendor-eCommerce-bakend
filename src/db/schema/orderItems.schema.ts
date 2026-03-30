import { pgTable, serial, text, integer, jsonb } from 'drizzle-orm/pg-core';

export const OrderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),

  orderId: integer('order_id').notNull(),

  productId: text('product_id').notNull(),
  vendorId: text('vendor_id').notNull(),

  variationId: text('variation_id'),

  name: text('name').notNull(),
  sku: text('sku'),

  quantity: integer('quantity').notNull(),

  price: integer('price').notNull(),
  subtotal: integer('subtotal').notNull(),
  subtotalTax: integer('subtotal_tax').default(0),

  total: integer('total').notNull(),
  totalTax: integer('total_tax').default(0),

  taxClass: text('tax_class'),

  variation: jsonb('variation'), // size, color

  image: jsonb('image'),

  metaData: jsonb('meta_data'),
});

export type OrderItemEntity = typeof OrderItems.$inferSelect;
export type NewOrderItemEntity = typeof OrderItems.$inferInsert;

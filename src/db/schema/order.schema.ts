import {
  pgTable,
  serial,
  text,
  integer,
  jsonb,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';
import { OrderStatus, PaymentStatus } from '../../types/status.type';
import { IAddress } from '../../types/address.type';

export const Orders = pgTable('orders', {
  id: serial('id').primaryKey(),

  // Basic
  orderNumber: text('order_number').notNull(),
  orderKey: text('order_key'), // WooCommerce style unique key
  parentId: integer('parent_id'), // for sub-orders (multi-vendor হলে useful)

  // User
  userId: text('user_id').notNull(),
  customerIp: text('customer_ip'),
  userAgent: text('user_agent'),

  // Status
  status: jsonb('status').$type<OrderStatus>().notNull(),
  paymentStatus: jsonb('payment_status').$type<PaymentStatus>().notNull(),

  // Payment
  paymentMethod: text('payment_method'),
  paymentMethodTitle: text('payment_method_title'),
  transactionId: text('transaction_id'),
  setPaid: boolean('set_paid').default(false),

  // Money
  currency: text('currency').default('BDT'),

  subtotal: integer('subtotal').notNull(),
  discountTotal: integer('discount_total').default(0),
  discountTax: integer('discount_tax').default(0),

  shippingTotal: integer('shipping_total').notNull(),
  shippingTax: integer('shipping_tax').default(0),

  cartTax: integer('cart_tax').default(0),
  totalTax: integer('total_tax').default(0),

  total: integer('total').notNull(),

  pricesIncludeTax: boolean('prices_include_tax').default(false),

  // Customer
  customerNote: text('customer_note'),

  billingAddress: jsonb('billing_address').$type<IAddress>(),
  shippingAddress: jsonb('shipping_address').$type<IAddress>(),

  // Dates
  createdAt: timestamp('date_created').defaultNow(),
  updatedAt: timestamp('date_modified'),
  paidAt: timestamp('date_paid'),
  completedAt: timestamp('date_completed'),
});

export type OrderEntity = typeof Orders.$inferSelect;
export type NewOrderEntity = typeof Orders.$inferInsert;

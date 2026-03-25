import { jsonb, text } from 'drizzle-orm/pg-core';
import { pgTable, serial } from 'drizzle-orm/pg-core';
import { OrderStatus, PaymentStatus } from '../../types/status.type';
import { timestamp } from 'drizzle-orm/pg-core';
import { integer } from 'drizzle-orm/pg-core';
import { IAddress } from '../../types/address.type';

export interface Items {
  productId: string;
  vendorId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export const Orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  orderNumber: text('order_number').notNull(),
  userId: text('user_id').notNull(),
  status: jsonb('status').$type<OrderStatus>(),
  orderDate: timestamp('order_date').notNull(),
  paymentMethod: text('payment_method'),
  paymentStatus: jsonb('payment_status').$type<PaymentStatus>(),
  subtotal: integer('subtotal').notNull(),
  shippingCost: integer('shipping_cost').notNull(),
  tax: integer('tax').notNull(),
  shippingAddress: jsonb('shipping_address').$type<IAddress>(),
  items: jsonb('items').$type<Items[]>(),
});

export type order = typeof Orders.$inferSelect;
export type newOrder = typeof Orders.$inferInsert;

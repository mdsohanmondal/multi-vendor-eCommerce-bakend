import {
  pgTable,
  uuid,
  text,
  boolean,
  integer,
  timestamp,
  jsonb,
  pgEnum,
  serial,
} from 'drizzle-orm/pg-core';
import { IAddress } from '../../types/address.type';

type Address = Omit<IAddress, 'addressId' | 'label'>;

export const ratingEnum = pgEnum('rating', ['0', '1', '2', '3', '4', '5']);

export const Vendors = pgTable('vendors', {
  id: serial('id').primaryKey(),
  storeName: text('store_name').notNull(),
  ownerName: text('owner_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  description: text('description').notNull(),
  logo: text('logo').notNull(),
  rating: ratingEnum('rating').notNull().default('0'),
  totalReviews: integer('total_reviews').notNull().default(0),
  joinDate: timestamp('join_date').defaultNow(),
  isActive: boolean('is_active').default(true),
  vendorAddress: jsonb('vendor_address').$type<Address>(),
});

export type vendor = typeof Vendors.$inferSelect;
export type newVendor = typeof Vendors.$inferInsert;

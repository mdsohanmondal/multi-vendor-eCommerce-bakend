import { integer } from 'drizzle-orm/pg-core';
import { serial } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const WishTable = pgTable('wishlist', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  productId: integer('product_id').notNull(),
});

export type wishlist = typeof WishTable.$inferSelect;
export type newWishlist = typeof WishTable.$inferInsert;

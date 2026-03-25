import { text, timestamp, serial, pgTable } from 'drizzle-orm/pg-core';
import { ratingEnum } from './vendor.schema';

export const Reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  productId: text('product_id').notNull(),
  userId: text('user_id').notNull(),
  rating: ratingEnum('rating').notNull().default('0'),
  comment: text('comment').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
});

export type review = typeof Reviews.$inferSelect;
export type newReview = typeof Reviews.$inferInsert;

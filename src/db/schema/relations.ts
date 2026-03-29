import { relations } from 'drizzle-orm';
import { Orders } from './order.schema';
import { Reviews } from './reviews.schema';
import { Address } from './address.schema';
import { Users } from './user.schema';
import { WishTable } from './whishList.schema';
import { Categories } from './category.schema';
import { Products } from './product.schema';

// user all relations
export const userRelations = relations(Users, ({ many }) => ({
  address: many(Address),
  wishlist: many(WishTable),
  orders: many(Orders),
  review: many(Reviews),
}));

// all product relations
export const productRelations = relations(Products, ({ many }) => ({
  reviews: many(Reviews),
}));

// one user to multiple addresses
export const addressRelation = relations(Address, ({ one }) => ({
  user: one(Users, {
    fields: [Address.userId],
    references: [Users.id],
  }),
}));

// one user to multiple wishlists
export const wishListRelation = relations(WishTable, ({ one }) => ({
  user: one(Users, {
    fields: [WishTable.userId],
    references: [Users.id],
  }),
}));

//  || one user to multiple orders
export const orderRelation = relations(Orders, ({ one }) => ({
  user: one(Users, {
    fields: [Orders.userId],
    references: [Users.id],
  }),
}));

// one user to multiple reviews
export const reviewRelation = relations(Reviews, ({ one }) => ({
  user: one(Users, {
    fields: [Reviews.userId],
    references: [Users.id],
  }),
  product: one(Products, {
    fields: [Reviews.productId],
    references: [Products.id],
  }),
}));

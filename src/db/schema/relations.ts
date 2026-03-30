import { relations } from 'drizzle-orm';

import { Users } from './user.schema';
import { Address } from './address.schema';
import { Orders } from './order.schema';
import { Reviews } from './reviews.schema';
import { WishTable } from './whishList.schema';

import { Products } from './product.schema';
import { Categories, Subcategories } from './category.schema';
import { Vendors } from './vendor.schema';

/* =========================================================
   USER RELATIONS
========================================================= */

export const userRelations = relations(Users, ({ many }) => ({
  addresses: many(Address),
  wishlist: many(WishTable),
  orders: many(Orders),
  reviews: many(Reviews),
}));

/* =========================================================
   PRODUCT RELATIONS
========================================================= */

export const productRelations = relations(Products, ({ one, many }) => ({
  vendor: one(Vendors, {
    fields: [Products.vendorId],
    references: [Vendors.id],
  }),

  category: one(Categories, {
    fields: [Products.categoryId],
    references: [Categories.id],
  }),

  subcategory: one(Subcategories, {
    fields: [Products.subcategoryId],
    references: [Subcategories.id],
  }),

  reviews: many(Reviews),
}));

/* =========================================================
   CATEGORY RELATIONS
========================================================= */

export const categoryRelations = relations(Categories, ({ many }) => ({
  subcategories: many(Subcategories),
  products: many(Products),
}));

/* =========================================================
   SUBCATEGORY RELATIONS
========================================================= */

export const subcategoryRelations = relations(
  Subcategories,
  ({ one, many }) => ({
    category: one(Categories, {
      fields: [Subcategories.parentCategoryId],
      references: [Categories.id],
    }),

    products: many(Products),
  }),
);

/* =========================================================
   ADDRESS RELATIONS
========================================================= */

export const addressRelations = relations(Address, ({ one }) => ({
  user: one(Users, {
    fields: [Address.userId],
    references: [Users.id],
  }),
}));

/* =========================================================
   WISHLIST RELATIONS
========================================================= */

export const wishListRelations = relations(WishTable, ({ one }) => ({
  user: one(Users, {
    fields: [WishTable.userId],
    references: [Users.id],
  }),

  product: one(Products, {
    fields: [WishTable.productId],
    references: [Products.id],
  }),
}));

/* =========================================================
   ORDER RELATIONS
========================================================= */

export const orderRelations = relations(Orders, ({ one }) => ({
  user: one(Users, {
    fields: [Orders.userId],
    references: [Users.id],
  }),
}));

/* =========================================================
   REVIEW RELATIONS
========================================================= */

export const reviewRelations = relations(Reviews, ({ one }) => ({
  user: one(Users, {
    fields: [Reviews.userId],
    references: [Users.id],
  }),

  product: one(Products, {
    fields: [Reviews.productId],
    references: [Products.id],
  }),
}));

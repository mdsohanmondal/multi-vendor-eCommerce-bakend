/**
 * "cart": {
    "userId": "u1",
    "items": [
      {
        "productId": "p8",
        "vendorId": "v3",
        "quantity": 1,
        "price": 48.0
      }
    ],
    "total": 48.0
  },
 */

import { text } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const Carts = pgTable('carts', {
  userId: text('user_id').notNull(),
});

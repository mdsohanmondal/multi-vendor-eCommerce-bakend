import { pgTable, serial, text, integer, boolean } from 'drizzle-orm/pg-core';

export const Address = pgTable('address', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(), // 🔗 relation
  label: text('label'), // home, office
  street: text('street').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  zip: text('zip').notNull(),
  country: text('country').notNull(),
  isDefault: boolean('is_default').default(false),
});

export type address = typeof Address.$inferSelect;
export type newAddress = typeof Address.$inferInsert;

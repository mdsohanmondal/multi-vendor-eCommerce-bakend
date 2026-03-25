// export type Image = string;

// export type Attributes = Record<string, string | number | string[]>;

// export type Rating = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

// export interface IProduct {
//   productId: string;
//   vendorId: string;
//   name: string;
//   slug: string;
//   description: string;
//   categoryId: string;
//   price: number;
//   comparePrice?: number;
//   costPrice: number;
//   sku: string;
//   stock: number;
//   images: Image[];
//   attributes: Attributes;
//   rating: Rating;
//   totalReviews: number;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export type CreateProductDto = Omit<
//   IProduct,
//   'productId' | 'rating' | 'totalReviews' | 'createdAt' | 'updatedAt'
// >;

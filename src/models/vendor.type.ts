// export interface IAddress {
//   street: string;
//   city: string;
//   zip: string;
//   state: string;
//   country: string;
// }

// export type Email = `${string}@${string}.${string}`;
// export type Phone = string;
// export type URL = string;

// export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

// export interface IVendor {
//   vendorId?: string;
//   storeName: string;
//   ownerName: string;
//   email: Email;
//   phone: Phone;
//   description: string;
//   logo: URL;
//   rating: Rating;
//   totalReviews: number;
//   joinedDate: Date;
//   isActive: boolean;
//   address: IAddress;
// }

// export type CreateVendorDto = Omit<
//   IVendor,
//   'vendorId' | 'rating' | 'totalReviews' | 'joinedDate' | 'isActive'
// >;

// export interface UpdateVendorDto extends Partial<CreateVendorDto> {}

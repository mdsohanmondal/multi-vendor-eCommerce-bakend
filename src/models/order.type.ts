// import { IAddress } from './vendor.type';

// export enum OrderStatus {
//   PENDING = 'pending',
//   CONFIRMED = 'confirmed',
//   PROCESSING = 'processing',
//   SHIPPED = 'shipped',
//   OUT_FOR_DELIVERY = 'out_for_delivery',
//   DELIVERED = 'delivered',
//   CANCELLED = 'cancelled',
//   RETURNED = 'returned',
//   REFUNDED = 'refunded',
// }

// export enum PaymentStatus {
//   PENDING = 'pending',
//   PAID = 'paid',
//   FAILED = 'failed',
//   CANCELLED = 'cancelled',
//   REFUNDED = 'refunded',
//   PARTIAL_REFUND = 'partial_refund',
// }

// export interface Items {
//   productId: string;
//   vendorId: string;
//   name: string;
//   quantity: number;
//   price: number;
//   total: number;
// }
// export interface IOrder {
//   orderId: string;
//   orderNumber: string;
//   userId: string;
//   status: OrderStatus;
//   orderDate: Date;
//   deliveryDate: Date;
//   paymentMethod: string;
//   paymentStatus: PaymentStatus;
//   subtotal: number;
//   shippingCost: number;
//   tax: number;
//   total: number;
//   shippingAddress: IAddress;
//   items: Items;
// }

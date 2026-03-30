/* =========================================================
   TYPES (GLOBAL - NO DUPLICATE)
========================================================= */

/* ------------------ Types ------------------ */

export type ProductImage = {
  src: string;
  alt?: string;
  position?: number;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Tag = {
  id: number;
  name: string;
  slug: string;
};

export type Attribute = {
  name: string;
  position?: number;
  variation?: boolean;
  options: string[];
};

export type Dimensions = {
  length?: string;
  width?: string;
  height?: string;
};

export type MetaData = {
  key: string;
  value: string;
};

/**
 * ==========================================
 * Enums
 * ==========================================
 */

// Stock Status
export enum StockStatus {
  IN_STOCK = 'in_stock',
  OUT_OF_STOCK = 'out_of_stock',
  LOW_STOCK = 'low_stock',
  PREORDER = 'preorder',
}

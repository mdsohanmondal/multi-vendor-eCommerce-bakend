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

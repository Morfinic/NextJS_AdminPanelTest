// === Product Params ===
export type ProductId = {
  _id?: string,
  name?: string,
  description?: string,
  imageUrl?: string,
  price?: number,
  category?: string,
}

export type CreateProductParams = {
  name: string;
  description?: string;
  imageUrl: string;
  price: number;
  category: string;
  properties: { key: string; vals: string }[];
}

// === Category Params ===
export type CreateCategoryParams = {
  name: string,
  properties: { key: string; vals: string[] }[];
}

export type categoryId = {
  _id?: string,
  name?: string,
  properties: { key: string; vals: string[] }[];
}
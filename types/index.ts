// === Product Params ===
export type ProductId = {
  _id?: string,
  name?: string,
  description?: string,
  price?: number,
  category?: string,
}

export type CreateProductParams = {
  name: string;
  description?: string;
  price: number;
  category: string;
}

// === Category Params ===
export type CreateCategoryParams = {
  name: string
}

export type categoryId = {
  _id?: string,
  name?: string
}
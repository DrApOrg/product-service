export interface ProductPayload extends Omit<Product, "id"> {}
export interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  size?: number;
  color?: string;
  quality?: string;
  ratings: number;
  supplier: string;
  category: string;
  subcategory: string;
  createdAt: string;
  updatedAt: string;
}

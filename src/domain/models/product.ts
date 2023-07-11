export interface ProductPayload extends Omit<Product, "id"> {}
export interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  subcategory?: string;
  size?: number;
  color?: string[];
  stock?: number;
  composition?: string;
  supplier?: string;
  createdAt: string;
  updatedAt: string;
}

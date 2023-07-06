export interface ProductPayload extends Omit<Product, "id"> {}
export interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  size?: number;
  color?: string;
  stock: number;
  supplier: string;
  comments: Comment[];
  ratings: Rating[];
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  user: string;
  content: string;
  date: Date;
}

interface Rating {
  user: string;
  value: number;
}

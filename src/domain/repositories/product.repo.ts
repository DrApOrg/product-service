import { Product, ProductPayload } from "../../domain/models/product";

export interface IProductRepository {
  find(): Promise<Product[] | null>;
  findById(id: string): Promise<Product | null>;
  update(id: string, params: ProductPayload): Promise<Product | null>;
  create(body: ProductPayload): Promise<Product>;
  delete(id: string): Promise<boolean>;
}

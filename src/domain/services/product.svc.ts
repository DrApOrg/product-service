import { Product } from "../models/product";
import { ProductRepository } from "../../infrastructure/repositories/product.repo";
import { BaseError } from "../Exceptions/BaseError";
export interface ProductService {
  createProduct: (product: Product) => Promise<Product>;
  updateProduct: (params: Product) => Promise<Product>;
  findById: (id: string) => Promise<Product>;
  deleteProduct: (id: string) => Promise<boolean>;
}

export class ProductService implements ProductService {
  constructor(private accRepo: ProductRepository) {}

  createProduct = async (product: Product): Promise<Product> => {
    const createdProduct = await this.accRepo.create(product);
    return createdProduct;
  };

  updateProduct = async (params: Product): Promise<Product> => {
    const product = await this.accRepo.update(params.id as string, params);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  findById = async (id: string): Promise<Product> => {
    const product = await this.accRepo.findById(id);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  find = async (): Promise<Product[]> => {
    const products = await this.accRepo.find();
    if (!products) {
      throw new BaseError("");
    }
    return products;
  };
  deleteProduct = async (id: string): Promise<boolean> => {
    const result = await this.accRepo.delete(id);
    return result;
  };
}

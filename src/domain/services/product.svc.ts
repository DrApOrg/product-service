import { Product } from "../models/product";
import { ProductRepository } from "../../infrastructure/repositories/product.repo";
import { BaseError } from "../Exceptions/BaseError";
import { IFileRepository } from "../repositories/IFile.srv";
export interface ProductService {
  createProduct: (product: Product) => Promise<Product>;
  updateProduct: (id: string, body: Product) => Promise<Product>;
  findById: (id: string) => Promise<Product>;
  deleteProduct: (id: string) => Promise<boolean>;
}

export class ProductService implements ProductService {
  constructor(
    private accRepo: ProductRepository,
    private s3Repo: IFileRepository
  ) {}

  createProduct = async (product: Product): Promise<Product> => {
    const createdProduct = await this.accRepo.create(product);
    return createdProduct;
  };

  updateProduct = async (id: string, body: Product): Promise<Product> => {
    const product = await this.accRepo.update(id, body);
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

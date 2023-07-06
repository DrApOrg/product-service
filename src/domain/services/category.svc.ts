import { Category } from "../models/category";
import { CategoryRepository } from "../../infrastructure/repositories/category.repo";
import { BaseError } from "../Exceptions/BaseError";

export interface CategoryService {
  createCategory: (product: Category) => Promise<Category>;
  updateCategory: (id: string, body: Category) => Promise<Category>;
  findById: (id: string) => Promise<Category>;
  deleteCategory: (id: string) => Promise<boolean>;
}

export class CategoryService implements CategoryService {
  constructor(private accRepo: CategoryRepository) {}

  createCategory = async (product: Category): Promise<Category> => {
    const createdProduct = await this.accRepo.create(product);
    return createdProduct;
  };

  updateCategory = async (id: string, body: Category): Promise<Category> => {
    const product = await this.accRepo.update(id as string, body);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  findById = async (id: string): Promise<Category> => {
    const product = await this.accRepo.findById(id);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  find = async (): Promise<Category[]> => {
    const products = await this.accRepo.find();
    if (!products) {
      throw new BaseError("");
    }
    return products;
  };
  deleteCategory = async (id: string): Promise<boolean> => {
    const result = await this.accRepo.delete(id);
    return result;
  };
}

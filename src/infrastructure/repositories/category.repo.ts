import { Category, CategoryPayload } from "../../domain/models/category";
import { CategoryDao } from "../database/category.dao";
import { ICategoryRepository } from "../../domain/repositories/category.repo";

export class CategoryRepository implements ICategoryRepository {
  async findById(id: string): Promise<Category | null> {
    const product = await CategoryDao.findById<Category>(id);
    if (product) {
      return product;
    }
    return null;
  }

  async update(id: string, body: CategoryPayload): Promise<Category | null> {
    const product = await CategoryDao.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (product) {
      return product;
    }
    return null;
  }

  async create(body: Category): Promise<Category> {
    return await CategoryDao.create<Category>(body);
  }

  async find(): Promise<Category[] | null> {
    const products = await CategoryDao.find<Category>();
    if (products) {
      return products;
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await CategoryDao.findByIdAndDelete(id);
    return !!result;
  }
}

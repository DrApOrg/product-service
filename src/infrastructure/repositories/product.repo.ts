import { Product, ProductPayload } from "../../domain/models/product";
import { productDao } from "../database/product.dao";
import { IProductRepository } from "../../domain/repositories/product.repo";

export class ProductRepository implements IProductRepository {
  async findById(id: string): Promise<Product | null> {
    const product = await productDao.findById<Product>(id);
    if (product) {
      return product;
    }
    return null;
  }

  async update(id: string, params: ProductPayload): Promise<Product | null> {
    const product = await productDao.findByIdAndUpdate(id, params, {
      new: true,
    });
    if (product) {
      return product;
    }
    return null;
  }

  async create(body: ProductPayload): Promise<Product> {
    return await productDao.create<Product>(body);
  }

  async find(): Promise<Product[] | null> {
    const products = await productDao.find<Product>();
    if (products) {
      return products;
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await productDao.findByIdAndDelete(id);
    return !!result;
  }
}

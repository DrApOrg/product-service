import { Rating, RatingPayload } from "../../domain/models/rating";
import { RatingDao } from "../database/rating.dao";
import { IRatingRepository } from "../../domain/repositories/rating.repo";

export class RatingRepository implements IRatingRepository {
  async findById(id: string): Promise<Rating | null> {
    const product = await RatingDao.findById<Rating>(id);
    if (product) {
      return product;
    }
    return null;
  }

  async update(id: string, body: RatingPayload): Promise<Rating | null> {
    const product = await RatingDao.findByIdAndUpdate<Rating>(id, body, {
      new: true,
    });
    if (product) {
      return product;
    }
    return null;
  }

  async create(body: Rating): Promise<Rating> {
    return await RatingDao.create<Rating>(body);
  }

  async find(): Promise<Rating[] | null> {
    const products = await RatingDao.find<Rating>();
    if (products) {
      return products;
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await RatingDao.findByIdAndDelete(id);
    return !!result;
  }
}

import { Review, ReviewPayload } from "../../domain/models/review";
import { ReviewDao } from "../database/review.dao";
import { IReviewRepository } from "../../domain/repositories/review.repo";

export class ReviewRepository implements IReviewRepository {
  async findById(id: string): Promise<Review | null> {
    const product = await ReviewDao.findById<Review>(id);
    if (product) {
      return product;
    }
    return null;
  }

  async update(id: string, body: ReviewPayload): Promise<Review | null> {
    const product = await ReviewDao.findByIdAndUpdate<Review>(id, body, {
      new: true,
    });
    if (product) {
      return product;
    }
    return null;
  }

  async create(body: Review): Promise<Review> {
    return await ReviewDao.create<Review>(body);
  }

  async find(): Promise<Review[] | null> {
    const products = await ReviewDao.find<Review>();
    if (products) {
      return products;
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await ReviewDao.findByIdAndDelete(id);
    return !!result;
  }
}

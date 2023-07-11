import { Review } from "../models/review";
import { ReviewRepository } from "../../infrastructure/repositories/review.repo";
import { BaseError } from "../Exceptions/BaseError";

export interface ReviewService {
  createReview: (product: Review) => Promise<Review>;
  updateReview: (id: string, body: Review) => Promise<Review>;
  findById: (id: string) => Promise<Review>;
  deleteReview: (id: string) => Promise<boolean>;
}

export class ReviewService implements ReviewService {
  constructor(private accRepo: ReviewRepository) {}

  createReview = async (product: Review): Promise<Review> => {
    const createdProduct = await this.accRepo.create(product);
    return createdProduct;
  };

  updateReview = async (id: string, body: Review): Promise<Review> => {
    const product = await this.accRepo.update(id, body);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  findById = async (id: string): Promise<Review> => {
    const product = await this.accRepo.findById(id);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  find = async (): Promise<Review[]> => {
    const products = await this.accRepo.find();
    if (!products) {
      throw new BaseError("");
    }
    return products;
  };
  deleteReview = async (id: string): Promise<boolean> => {
    const result = await this.accRepo.delete(id);
    return result;
  };
}

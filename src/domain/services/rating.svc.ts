import { Rating } from "../models/rating";
import { RatingRepository } from "../../infrastructure/repositories/rating.repo";
import { BaseError } from "../Exceptions/BaseError";
import { IFileRepository } from "../repositories/IFile.srv";
export interface RatingService {
  createRating: (product: Rating) => Promise<Rating>;
  updateRating: (id: string, body: Rating) => Promise<Rating>;
  findById: (id: string) => Promise<Rating>;
  deleteRating: (id: string) => Promise<boolean>;
}

export class RatingService implements RatingService {
  constructor(private accRepo: RatingRepository) {}

  createRating = async (product: Rating): Promise<Rating> => {
    const createdProduct = await this.accRepo.create(product);
    return createdProduct;
  };

  updateRating = async (id: string, body: Rating): Promise<Rating> => {
    const product = await this.accRepo.update(id, body);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  findById = async (id: string): Promise<Rating> => {
    const product = await this.accRepo.findById(id);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  find = async (): Promise<Rating[]> => {
    const products = await this.accRepo.find();
    if (!products) {
      throw new BaseError("");
    }
    return products;
  };
  deleteRating = async (id: string): Promise<boolean> => {
    const result = await this.accRepo.delete(id);
    return result;
  };
}

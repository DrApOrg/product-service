import { Review, ReviewPayload } from "../models/review";

export interface IReviewRepository {
  find(): Promise<Review[] | null>;
  findById(id: string): Promise<Review | null>;
  update(id: string, body: ReviewPayload): Promise<Review | null>;
  create(body: ReviewPayload): Promise<Review>;
  delete(id: string): Promise<boolean>;
}

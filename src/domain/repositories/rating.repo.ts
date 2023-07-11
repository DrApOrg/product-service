import { Rating, RatingPayload } from "../models/rating";

export interface IRatingRepository {
  find(): Promise<Rating[] | null>;
  findById(id: string): Promise<Rating | null>;
  update(id: string, body: RatingPayload): Promise<Rating | null>;
  create(body: RatingPayload): Promise<Rating>;
  delete(id: string): Promise<boolean>;
}

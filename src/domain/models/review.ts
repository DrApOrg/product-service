import Types from "mongoose";
export interface ReviewPayload extends Omit<Review, "id"> {}
export interface Review {
  id: string;
  productId: Types.ObjectId;
  userId: Types.ObjectId;
  comment: string;
  rating: number;
  createdAt: Date;
}

import Types from "mongoose";
export interface RatingPayload extends Omit<Rating, "id"> {}
export interface Rating {
  id: string;
  productId: Types.ObjectId;
  userId: Types.ObjectId;
  rating: number;
}

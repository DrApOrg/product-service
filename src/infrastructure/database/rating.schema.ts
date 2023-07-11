import { Schema } from "mongoose";

export const RatingSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: true },
});

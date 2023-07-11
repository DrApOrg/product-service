import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  userId: { type: String, required: true },
  comment: { type: String, required: true },
});

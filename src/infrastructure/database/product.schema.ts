import { Schema } from "mongoose";

export const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  size: { type: Number },
  color: { type: String },
  quality: { type: String },
  supplier: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  comments: [
    {
      user: { type: String },
      content: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
  ratings: [
    {
      user: { type: String },
      value: { type: Number, min: 1, max: 5 },
    },
  ],
});

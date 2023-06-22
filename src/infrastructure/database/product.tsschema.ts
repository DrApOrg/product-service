import { Schema } from "mongoose";

export const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  size: { type: Number },
  color: { type: String },
  quality: { type: String },
  ratings: { type: Number, required: true },
  supplier: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
});

import { Schema } from "mongoose";

export const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
  size: { type: Number, required: true },
  color: { type: Array, required: true },
  supplier: { type: String, required: true },
  composition: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
});

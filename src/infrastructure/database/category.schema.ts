import { Schema } from "mongoose";
import { Category, Subcategory } from "../../domain/models/category";

export const SubcategorySchema = new Schema<Category>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export const CategorySchema = new Schema<Category>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  subcategories: [SubcategorySchema],
});

export default { CategorySchema, SubcategorySchema };

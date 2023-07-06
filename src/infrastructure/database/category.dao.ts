import { model } from "mongoose";
import { CategorySchema } from "./category.schema";
import { Category } from "../../domain/models/category";

export const CategoryDao = model<Category>("Category", CategorySchema);

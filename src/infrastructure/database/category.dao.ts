import { model } from "mongoose";
import { categorySchema } from "./category.schema";
import { Category } from "../../domain/models/category";

export const categoryDao = model<Category>("Product", categorySchema);

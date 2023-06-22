import { model } from "mongoose";
import { productSchema } from "./product.tsschema";
import { Product } from "../../domain/models/product";

export const productDao = model<Product>("Product", productSchema);

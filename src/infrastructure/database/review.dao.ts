import { model } from "mongoose";
import { ReviewSchema } from "./review.schema";
import { Review } from "../../domain/models/review";

export const ReviewDao = model<Review>("Review", ReviewSchema);

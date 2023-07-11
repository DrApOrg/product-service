import { model } from "mongoose";
import { RatingSchema } from "./rating.schema";
import { Rating } from "../../domain/models/rating";

export const RatingDao = model<Rating>("Rating", RatingSchema);

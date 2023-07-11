import { model } from "mongoose";
import { CommentSchema } from "./comment.schema";
import { Comment } from "../../domain/models/comment";

export const CommentDao = model<Comment>("Comment", CommentSchema);

import Types from "mongoose";
export interface CommentPayload extends Omit<Comment, "id"> {}
export interface Comment {
  id: string;
  productId: Types.ObjectId;
  userId: Types.ObjectId;
  comment: string;
}

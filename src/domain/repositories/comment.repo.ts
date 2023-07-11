import { Comment, CommentPayload } from "../models/comment";

export interface ICommentRepository {
  find(): Promise<Comment[] | null>;
  findById(id: string): Promise<Comment | null>;
  update(id: string, body: CommentPayload): Promise<Comment | null>;
  create(body: CommentPayload): Promise<Comment>;
  delete(id: string): Promise<boolean>;
}

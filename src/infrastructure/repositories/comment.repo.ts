import { Comment, CommentPayload } from "../../domain/models/comment";
import { CommentDao } from "../database/comment.dao";
import { ICommentRepository } from "../../domain/repositories/comment.repo";

export class CommentRepository implements ICommentRepository {
  async findById(id: string): Promise<Comment | null> {
    const product = await CommentDao.findById<Comment>(id);
    if (product) {
      return product;
    }
    return null;
  }

  async update(id: string, body: CommentPayload): Promise<Comment | null> {
    const product = await CommentDao.findByIdAndUpdate<Comment>(id, body, {
      new: true,
    });
    if (product) {
      return product;
    }
    return null;
  }

  async create(body: Comment): Promise<Comment> {
    return await CommentDao.create<Comment>(body);
  }

  async find(): Promise<Comment[] | null> {
    const products = await CommentDao.find<Comment>();
    if (products) {
      return products;
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await CommentDao.findByIdAndDelete(id);
    return !!result;
  }
}

import { Comment } from "../models/comment";
import { CommentRepository } from "../../infrastructure/repositories/comment.repo";
import { BaseError } from "../Exceptions/BaseError";

export interface CommentService {
  createProduct: (product: Comment) => Promise<Comment>;
  updateProduct: (id: string, body: Comment) => Promise<Comment>;
  findById: (id: string) => Promise<Comment>;
  uploadFile: (param: any) => Promise<string>;
  deleteProduct: (id: string) => Promise<boolean>;
}

export class CommentService implements CommentService {
  constructor(private accRepo: CommentRepository) {}

  createProduct = async (product: Comment): Promise<Comment> => {
    const createdProduct = await this.accRepo.create(product);
    return createdProduct;
  };

  updateProduct = async (id: string, body: Comment): Promise<Comment> => {
    const product = await this.accRepo.update(id, body);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  findById = async (id: string): Promise<Comment> => {
    const product = await this.accRepo.findById(id);
    if (!product) {
      throw new BaseError("");
    }
    return product;
  };

  find = async (): Promise<Comment[]> => {
    const products = await this.accRepo.find();
    if (!products) {
      throw new BaseError("");
    }
    return products;
  };
  deleteProduct = async (id: string): Promise<boolean> => {
    const result = await this.accRepo.delete(id);
    return result;
  };
}

import { ResponsePayload } from "../../../domain/Payload/response.payload";
import { Comment } from "../../../domain/models/comment";
import { CommentService } from "../../../domain/services/comment.svc";
import type { NextFunction, Request, Response } from "express";

export class CommentController {
  constructor(private service: CommentService) {}

  postComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const createdProduct = await this.service.createProduct(product);
      const payload: ResponsePayload<Comment> = {
        message: "product created successfully",
        status: 200,
        data: createdProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  updateComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const updateProduct = await this.service.updateProduct(id, product);
      const payload: ResponsePayload<Comment> = {
        message: "product updated successfully",
        status: 200,
        data: updateProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const getProduct = await this.service.findById(id);
      const payload: ResponsePayload<Comment> = {
        message: "product get successfully",
        status: 200,
        data: getProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProducts = await this.service.find();
      const payload: ResponsePayload<Comment[]> = {
        message: "product get successfully",
        status: 200,
        data: getProducts,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };

  deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.service.deleteProduct(id);
      const payload: ResponsePayload<boolean> = {
        message: "delete product  successfully",
        status: 200,
        data: result,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
}

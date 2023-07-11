import { ResponsePayload } from "../../../domain/Payload/response.payload";
import { Review } from "../../../domain/models/review";
import { ReviewService } from "../../../domain/services/review.svc";
import type { NextFunction, Request, Response } from "express";

export class ReviewController {
  constructor(private service: ReviewService) {}

  postReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const createdProduct = await this.service.createReview(product);
      const payload: ResponsePayload<Review> = {
        message: "product created successfully",
        status: 200,
        data: createdProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  updateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const updateProduct = await this.service.updateReview(id, product);
      const payload: ResponsePayload<Review> = {
        message: "product updated successfully",
        status: 200,
        data: updateProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const getProduct = await this.service.findById(id);
      const payload: ResponsePayload<Review> = {
        message: "product get successfully",
        status: 200,
        data: getProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProducts = await this.service.find();
      const payload: ResponsePayload<Review[]> = {
        message: "product get successfully",
        status: 200,
        data: getProducts,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };

  deleteReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.service.deleteReview(id);
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

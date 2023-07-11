import { ResponsePayload } from "../../../domain/Payload/response.payload";
import { Rating } from "../../../domain/models/rating";
import { RatingService } from "../../../domain/services/rating.svc";
import type { NextFunction, Request, Response } from "express";

export class RatingController {
  constructor(private service: RatingService) {}

  postRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const createdProduct = await this.service.createRating(product);
      const payload: ResponsePayload<Rating> = {
        message: "product created successfully",
        status: 200,
        data: createdProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  updateRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const updateProduct = await this.service.updateRating(id, product);
      const payload: ResponsePayload<Rating> = {
        message: "product updated successfully",
        status: 200,
        data: updateProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const getProduct = await this.service.findById(id);
      const payload: ResponsePayload<Rating> = {
        message: "product get successfully",
        status: 200,
        data: getProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getRatings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProducts = await this.service.find();
      const payload: ResponsePayload<Rating[]> = {
        message: "product get successfully",
        status: 200,
        data: getProducts,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };

  deleteRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.service.deleteRating(id);
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

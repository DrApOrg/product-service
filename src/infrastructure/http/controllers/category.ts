import { ResponsePayload } from "../../../domain/Payload/response.payload";
import { Category } from "../../../domain/models/category";
import { CategoryService } from "../../../domain/services/category.svc";
import type { NextFunction, Request, Response } from "express";

export class CategoryController {
  constructor(private service: CategoryService) {}
  postCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const createdProduct = await this.service.createCategory(product);
      const payload: ResponsePayload<Category> = {
        message: "product created successfully",
        status: 200,
        data: createdProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const updateProduct = await this.service.updateCategory(id, product);
      const payload: ResponsePayload<Category> = {
        message: "product updated successfully",
        status: 200,
        data: updateProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const getProduct = await this.service.findById(id);
      const payload: ResponsePayload<Category> = {
        message: "product get successfully",
        status: 200,
        data: getProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProducts = await this.service.find();
      const payload: ResponsePayload<Category[]> = {
        message: "product get successfully",
        status: 200,
        data: getProducts,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };

  deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.service.deleteCategory(id);
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

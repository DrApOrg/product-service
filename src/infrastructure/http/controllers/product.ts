import { ResponsePayload } from "../../../domain/Payload/response.payload";
import { Product } from "../../../domain/models/product";
import { ProductService } from "../../../domain/services/product.svc";
import type { NextFunction, Request, Response } from "express";

export class ProductController {
  constructor(private service: ProductService) {}
  postProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const createdProduct = await this.service.createProduct(product);
      const payload: ResponsePayload<Product> = {
        message: "product created successfully",
        status: 200,
        data: createdProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const updateProduct = await this.service.updateProduct(product);
      const payload: ResponsePayload<Product> = {
        message: "product updated successfully",
        status: 200,
        data: updateProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const getProduct = await this.service.findById(id);
      const payload: ResponsePayload<Product> = {
        message: "product get successfully",
        status: 200,
        data: getProduct,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };
  getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProducts = await this.service.find();
      const payload: ResponsePayload<Product[]> = {
        message: "product get successfully",
        status: 200,
        data: getProducts,
      };
      return res.json(payload).status(200);
    } catch (error) {
      next(error);
    }
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
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

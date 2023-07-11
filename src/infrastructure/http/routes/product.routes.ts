import type { Application, Response, Request } from "express";
import { ProductController } from "../controllers/product";
import { ProductService } from "../../../domain/services/product.svc";
import { ProductRepository } from "../../repositories/product.repo";
import { S3Repository } from "../../repositories/s3.repo";
import { storageClient } from "../../aws/s3";
export const ProductRoutes = (app: Application) => {
  let productRepo = new ProductRepository();
  let s3Repo = new S3Repository(storageClient);
  let productService = new ProductService(productRepo, s3Repo);
  let productController = new ProductController(productService);

  app.post("/v1/api/product", productController.postProduct);
  app.get("/v1/api/product/:id", productController.getProduct);
  app.get("/v1/api/product", productController.getProducts);
  app.put("/v1/api/product/:id", productController.updateProduct);
  app.delete("/v1/api/product/:id", productController.deleteProduct);
  app.get("/v1/api/auth/test", (req: Request, res: Response) => {
    res.send("hola mundo desde usuarios");
  });

  return app;
};

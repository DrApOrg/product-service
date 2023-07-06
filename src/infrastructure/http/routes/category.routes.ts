import type { Application, Response, Request } from "express";
import { CategoryController } from "../controllers/category";
import { CategoryService } from "../../../domain/services/category.svc";
import { CategoryRepository } from "../../repositories/category.repo";

export const CategoryRoutes = (app: Application) => {
  let categoryRepo = new CategoryRepository();
  let categoryService = new CategoryService(categoryRepo);
  let categoryController = new CategoryController(categoryService);

  app.post("/v1/api/category", categoryController.postCategory);
  app.get("/v1/api/category/:id", categoryController.getCategory);
  app.get("/v1/api/category", categoryController.getCategories);
  app.put("/v1/api/category/:id", categoryController.updateCategory);
  app.delete("/v1/api/category/:id", categoryController.deleteCategory);
  app.get("/v1/api/auth/test", (req: Request, res: Response) => {
    res.send("hola mundo desde usuarios");
  });

  return app;
};

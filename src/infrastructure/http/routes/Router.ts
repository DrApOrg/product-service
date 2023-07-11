import { Application, Request, Response } from "express";
import { ProductRoutes } from "./product.routes";
import { CategoryRoutes } from "./category.routes";
import { CommentRoutes } from "./comment.routes";
import { RatingRoutes } from "./rating.routes";
import { ReviewRoutes } from "./review.routes";
export class Router {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  init() {
    this.app = ProductRoutes(this.app);
    this.app = CategoryRoutes(this.app);
    this.app = CommentRoutes(this.app);
    this.app = RatingRoutes(this.app);
    this.app = ReviewRoutes(this.app);
    this.app.get("/api/v1/test", (req: Request, res: Response) => {
      res.send("hola mundo");
    });
  }
}

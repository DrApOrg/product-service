import { Application, Request, Response } from "express";
import { ProductRoutes } from "./product.routes";
export class Router {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  init() {
    this.app = ProductRoutes(this.app);

    this.app.get("/api/v1/test", (req: Request, res: Response) => {
      res.send("hola mundo");
    });
  }
}

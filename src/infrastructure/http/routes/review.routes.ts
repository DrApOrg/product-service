import type { Application, Response, Request } from "express";
import { ReviewController } from "../controllers/review";
import { ReviewService } from "../../../domain/services/review.svc";
import { ReviewRepository } from "../../repositories/review.repo";

export const ReviewRoutes = (app: Application) => {
  let reviewRepo = new ReviewRepository();
  let reviewService = new ReviewService(reviewRepo);
  let reviewController = new ReviewController(reviewService);

  app.post("/v1/api/review", reviewController.postReview);
  app.get("/v1/api/review/:id", reviewController.getReview);
  app.get("/v1/api/review", reviewController.getReviews);
  app.put("/v1/api/review/:id", reviewController.updateReview);
  app.delete("/v1/api/review/:id", reviewController.deleteReview);

  return app;
};

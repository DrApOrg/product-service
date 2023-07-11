import type { Application, Response, Request } from "express";
import { RatingController } from "../controllers/rating";
import { RatingService } from "../../../domain/services/rating.svc";
import { RatingRepository } from "../../repositories/rating.repo";

export const RatingRoutes = (app: Application) => {
  let ratingRepo = new RatingRepository();
  let ratingService = new RatingService(ratingRepo);
  let ratingController = new RatingController(ratingService);

  app.post("/v1/api/rating", ratingController.postRating);
  app.get("/v1/api/rating/:id", ratingController.getRating);
  app.get("/v1/api/rating", ratingController.getRatings);
  app.put("/v1/api/rating/:id", ratingController.updateRating);
  app.delete("/v1/api/rating/:id", ratingController.deleteRating);

  return app;
};

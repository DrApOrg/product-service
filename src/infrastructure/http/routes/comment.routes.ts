import type { Application, Response, Request } from "express";
import { CommentController } from "../controllers/comment";
import { CommentService } from "../../../domain/services/comment.svc";
import { CommentRepository } from "../../repositories/comment.repo";

export const CommentRoutes = (app: Application) => {
  let commentRepo = new CommentRepository();
  let commentService = new CommentService(commentRepo);
  let commentController = new CommentController(commentService);

  app.post("/v1/api/comment", commentController.postComment);
  app.get("/v1/api/comment/:id", commentController.getComment);
  app.get("/v1/api/comment", commentController.getComments);
  app.put("/v1/api/comment/:id", commentController.updateComment);
  app.delete("/v1/api/comment/:id", commentController.deleteComment);

  return app;
};

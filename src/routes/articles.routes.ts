import { Router } from "express";
import { ArticlesController } from "../controllers/articles.controller";
//import { SseController } from "../sse/sseController";

const router = Router();
const controller = new ArticlesController();
//const sseController = new SseController();

router.get("/", controller.getArticles);
router.put("/:id/stock", controller.updateArticleStock);
//router.get("/sse", sseController.connect);

export default router;
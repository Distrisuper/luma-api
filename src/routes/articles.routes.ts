import { Router } from "express";
import { ArticlesController } from "../controllers/articles.controller";

const router = Router();
const controller = new ArticlesController();

router.get("/", controller.getArticles);


export default router;
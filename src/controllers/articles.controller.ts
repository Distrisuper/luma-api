import { Request, Response } from "express";
import { ArticlesService } from "../services/articles.service";

export class ArticlesController {
  private service = new ArticlesService();

  getArticles = async (req: Request, res: Response) => {
    try {
      const articles = await this.service.getArticles();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching articles",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
  updateArticleStock = async (req: Request, res: Response) => {
    try {
      const articleId = req.params.id;
      const quantity = req.body.quantity
      const article = await this.service.updateArticleStock(articleId, quantity);
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating article stock",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
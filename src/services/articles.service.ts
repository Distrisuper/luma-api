import { ErpClientService } from "./erpClientService";
import { CacheService } from "./cacheService";
import { AppDataSource } from "../db/data-source";
import { Article } from "../entities/articles";
//import sseManager from "../sse/sseManager";
const CACHE_TTL = 60 * 60 * 3; // 3 hours

export class ArticlesService {
  cacheService = new CacheService();
  erpClientService = new ErpClientService();
  async getArticles() {
    const cachedArticles = await this.cacheService.get("articles");
    if (cachedArticles) {
      return cachedArticles;
    }

    const articles = await AppDataSource.getRepository(Article).find();

    //const responseAuthErp = await this.erpClientService.getArticles({
    //  url: `${Config.ERP_API.BASE_URL}/v3/pos/items?sucursal=1`,
    //  method: "GET",
    //});
    await this.cacheService.set("articles", articles, CACHE_TTL);
    return { success: true, data: articles };
  }
  async updateArticleStock(articleId: string, quantity: number) {
    const article = await AppDataSource.getRepository(Article).findOne({ where: { COD_ARTICU: articleId } });
    if (!article) {
      throw new Error("Article not found");
    }
    article.STOCK = quantity;
    await AppDataSource.getRepository(Article).save(article);
    await this.cacheService.delete("articles");
    //sseManager.broadcast("article-stock-updated", articleId,quantity);
    return { success: true, data: article };
  }
}
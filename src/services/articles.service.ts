import { erpRequest } from "./erpClientService";
import { CacheService } from "./cacheService";
const ERP_URL = process.env.URL_ERP_API_MORPHI;
const CACHE_TTL = 60 * 60 * 3; // 3 hours

export class ArticlesService {
  cacheService = new CacheService();
  async getArticles() {
    const cachedArticles = await this.cacheService.get("articles");
    if (cachedArticles) {
      return cachedArticles;
    }
    const responseAuthErp = await erpRequest({
      url: `${ERP_URL}/v3/pos/items?sucursal=1`,
      method: "GET",
    });
    await this.cacheService.set("articles", responseAuthErp.data, CACHE_TTL);
    return responseAuthErp.data;
  }
}
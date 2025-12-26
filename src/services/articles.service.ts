import { ErpClientService } from "./erpClientService";
import { CacheService } from "./cacheService";
import { Config } from "../utils/config";
const CACHE_TTL = 60 * 60 * 3; // 3 hours

export class ArticlesService {
  cacheService = new CacheService();
  erpClientService = new ErpClientService();
  async getArticles() {
    const cachedArticles = await this.cacheService.get("articles");
    if (cachedArticles) {
      return cachedArticles;
    }
    const responseAuthErp = await this.erpClientService.getArticles({
      url: `${Config.ERP_API.BASE_URL}/v3/pos/items?sucursal=1`,
      method: "GET",
    });
    await this.cacheService.set("articles", responseAuthErp.data, CACHE_TTL);
    return responseAuthErp.data;
  }
}
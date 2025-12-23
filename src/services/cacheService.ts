import NodeCache from "node-cache";

export class CacheService {
  private cache = new NodeCache();

  async get(key: string) {
    return this.cache.get(key);
  }
  async set(key: string, value: any, ttl: number) {
    return this.cache.set(key, value, ttl);
  }
}
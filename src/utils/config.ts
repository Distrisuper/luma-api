export class Config {
  static readonly ERP_API = {
    BASE_URL: process.env.URL_ERP_API_MORPHI,
    USER: process.env.ERP_API_USERNAME,
    PASSWORD: process.env.ERP_API_PASSWORD,
    GRUPO: process.env.ERP_API_GRUPO,
    ALIAS: process.env.ERP_API_ALIAS,
  }
}
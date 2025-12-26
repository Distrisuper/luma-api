import axios, { AxiosRequestConfig } from "axios";
import { loginToERP } from "./erpAuthService";
import { erpTokenStore } from "../utils/erpTokenStorage";
import { Config } from "../utils/config";

export class ErpClientService {
  async getArticles(config: AxiosRequestConfig) {
    if (!erpTokenStore.token) {
      console.log("No token found, logging in...");
      await loginToERP();
    }

    try {
      return await axios({
        ...config,
        headers: {
          Authorization: `Bearer ${erpTokenStore.token}`,
          'Grupo': Config.ERP_API.GRUPO,
          'Sucursal_alias': Config.ERP_API.ALIAS,
        },
      });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  }
}

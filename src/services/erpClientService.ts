import axios, { AxiosRequestConfig } from "axios";
import { loginToERP } from "./erpAuthService";
import { erpTokenStore } from "../utils/erpTokenStorage";

const ERP_API_GRUPO = 159
const ERP_API_ALIAS = 'LUMA BAR'

export async function erpRequest<T>(config: AxiosRequestConfig) {
  if (!erpTokenStore.token) {
    console.log("No token found, logging in...");
    await loginToERP();
  }

  try {
    return await axios({
      ...config,
      headers: {
        Authorization: `Bearer ${erpTokenStore.token}`,
        'Grupo': ERP_API_GRUPO,
        'Sucursal_alias': ERP_API_ALIAS,
      },
    });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

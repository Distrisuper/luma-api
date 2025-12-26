import axios from "axios";
import { erpTokenStore } from "../utils/erpTokenStorage";
import { Config } from "../utils/config";

export async function loginToERP() {
  try {
    const response = await axios.post(`${Config.ERP_API.BASE_URL}/v3/auth/login`, {
      username: Config.ERP_API.USER,
      password: Config.ERP_API.PASSWORD,
    });
  
    if (response.status !== 200) {
      throw new Error("Failed to login to ERP");
    }
    console.log("access_token: ", response.data.access_token);
    console.log("expires_in: ", response.data.expires_in);
  
    erpTokenStore.token = response.data.access_token;
    erpTokenStore.expiresAt = response.data.expires_in;
  
    return erpTokenStore.token;
  } catch (error) {
    console.log(error) 
  }
}

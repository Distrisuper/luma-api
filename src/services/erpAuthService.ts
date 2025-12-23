// services/erpAuthService.ts
import axios from "axios";
import { erpTokenStore } from "../utils/erpTokenStorage";

const ERP_URL = process.env.URL_ERP_API_MORPHI;
const ERP_USER = process.env.ERP_API_USERNAME;
const ERP_PASSWORD = process.env.ERP_API_PASSWORD;

export async function loginToERP() {
  try {
    console.log(`${ERP_URL}/v3/auth/login`);
    console.log(ERP_USER);
    console.log(ERP_PASSWORD);
    const response = await axios.post(`${ERP_URL}/v3/auth/login`, {
      username: ERP_USER,
      password: ERP_PASSWORD,
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

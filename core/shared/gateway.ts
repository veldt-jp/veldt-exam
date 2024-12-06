import { apiClient } from "@/libs/api";

export class SharedGateway {
  async fetchConfigDef(): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/backoffice/v1/config`;
    const res = await apiClient.get({ url: url });
    return res as any;
  }
}

import { apiClient } from "@/libs/api";

export class AccountGateway {
  async fetchAccountDef(): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/backoffice/v1/account`;
    const res = await apiClient.get({ url: url });
    return res as any;
  }

  async updateMfa(req: any): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/vw/system/user/mfa`;
    const res = await apiClient.post({ url: url, body: req });
    return res as any;
  }
}

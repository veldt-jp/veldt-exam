import { tableRes, formRes } from "@/tests/mock";

export class MockGateway {
  async fetchTableData(): Promise<any> {
    const res = tableRes;
    return res as any;
  }

  async fetchFormData(): Promise<any> {
    const res = formRes;
    return res as any;
  }
}

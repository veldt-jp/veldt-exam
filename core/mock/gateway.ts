import { todoRes } from "@/tests/mock";

export class MockGateway {
  async fetchToDoDef(): Promise<any> {
    const res = todoRes;
    return res as any;
  }
}

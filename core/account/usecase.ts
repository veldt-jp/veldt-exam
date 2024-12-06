import { IAccountRepository } from "./irepo";
import { AccountAdapter } from "./adapter";
import { AccountDef } from "./type";

export class AccountUsecase {
  private repository: IAccountRepository;
  private error: (error: any) => void;

  constructor(repository: IAccountRepository, error: (error: any) => void) {
    this.repository = repository;
    this.error = error;
  }

  async fetchAccountDef(): Promise<AccountDef[]> {
    try {
      const data = await this.repository.fetchAccountDef();
      const res = AccountAdapter.toOutputDTO(data);
      return res;
    } catch (error) {
      this.error(error);
      throw error;
    }
  }

  async updateMfa(req: any): Promise<boolean> {
    try {
      const res = await this.repository.updateMfa(req);
      return res;
    } catch (error) {
      this.error(error);
      throw error;
    }
  }
}

import { ISharedRepository } from "./irepo";

export class SharedUsecase {
  private repository: ISharedRepository;
  private error: (error: any) => void;

  constructor(repository: ISharedRepository, error: (error: any) => void) {
    this.repository = repository;
    this.error = error;
  }

  async fetchConfigDef(): Promise<any> {
    try {
      const res = await this.repository.fetchConfigDef();
      return res;
    } catch (error) {
      this.error(error);
      throw error;
    }
  }
}

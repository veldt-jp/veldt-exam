import { IMockRepository } from "./irepo";

export class MockUsecase {
  private repository: IMockRepository;
  private error: (error: any) => void;

  constructor(repository: IMockRepository, error: (error: any) => void) {
    this.repository = repository;
    this.error = error;
  }

  async fetchTableData(): Promise<any> {
    try {
      return await this.repository.fetchTableData();
    } catch (error) {
      this.error(error);
      throw error;
    }
  }

  async fetchFormData(): Promise<any> {
    try {
      return await this.repository.fetchFormData();
    } catch (error) {
      this.error(error);
      throw error;
    }
  }
}

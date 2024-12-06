export interface IMockRepository {
  fetchTableData(): Promise<any>;

  fetchFormData(): Promise<any>;
}

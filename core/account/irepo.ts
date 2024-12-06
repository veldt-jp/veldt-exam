export interface IAccountRepository {
  fetchAccountDef(): Promise<any>;

  updateMfa(req: any): Promise<any>;
}

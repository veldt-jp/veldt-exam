import { AccountDef } from "./type";

export class AccountAdapter {
  static toOutputDTO(res: any): AccountDef[] {
    return res.map((account: any) => ({
      ...account,
      login_users: account.login_users.map((user: any) => ({
        ...user,
        login_at: AccountAdapter._parseDate(user.login_at),
      })),
      expired_at: AccountAdapter._parseDate(account.expired_at),
      login_at: AccountAdapter._parseDate(account.login_at),
    }));
  }

  private static _parseDate(date: any): Date | null {
    if (!date) return null;
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  }
}

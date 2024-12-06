export type AccountDef = {
  id: string;
  name: string;
  email: string;
  status: string;
  login_users: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    login_at?: Date | null;
  }[];
  fee_type?: string;
  payment?: {
    method: string;
  };
  integrated_service?: string[];
  options?: string[];
  expired_at?: Date | null;
  login_at?: Date | null;
};

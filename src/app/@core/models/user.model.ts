export interface UserInfo {
  id: string;
  userName: string;
  role: string;
  companyId: string;
  companyTypeId: string;
  companyType: string;
  companyName: string;
  isLicensedUser: string;
  isLicensedExpired: string;
  dateFormat: string;
  timeFormat: string;
  changedPassword: boolean;
}

export interface UserSession {
  auth_token: string;
  sessionTime: string;
}

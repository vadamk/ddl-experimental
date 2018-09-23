export interface MenuItem {
  label: string;
  icon?: string;
  url?: string;
  routerLink?: any[];
  routerLinkActiveOptions?: any;
  queryParams?: any;
  children?: MenuItem[];
}

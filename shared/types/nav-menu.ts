export type NavMenuType = {
  label: string;
  link?: string;
  iconName: string;
  badge?: number | string;
  child?: {
    label: string;
    link: string;
  }[];
};


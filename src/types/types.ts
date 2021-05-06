export type ContactsType = {
  github: string;
  stack: string;
  text?: string;
};

export type CardType = {
  id: number;
  to?: string;
  name: string;
  mobile: string;
  info: ContactsType;
  img?: any;
};

export type TabsType = {
  id: number;
  name: string;
};

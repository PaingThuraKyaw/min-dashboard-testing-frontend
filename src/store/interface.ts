export interface ItemRespone<T> {
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
  data: T;
}

export interface Item {
  id: string;
  name: string;
  phNumber: string;
  company: string;
  position: string;
  age: string;
  created_at?: Date;
}

export interface createItem {
  name: string;
  phNumber: string;
  company: string;
  position: string;
  age: string;
}

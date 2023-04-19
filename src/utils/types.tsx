export type dataAsProps = {
  data: dataItem[];
};

export type dataItem = {
  id: number;
  name: string;
  amount: number;
  date: number;
  from: string;
  category: string;
};

export type newTransactionType = {
  name: string;
  amount: number;
  date: number;
  from: string;
  category: string;
};

export interface ICurrency {
  _id: string;
  name: string;
  currencyType: string;
  currencySymbol: string;
  status: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface ICurrencyPair {
  _id: string;
  baseCurrency: ICurrency;
  tradingCurrency: ICurrency;
  imageUrl: string;
  status: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

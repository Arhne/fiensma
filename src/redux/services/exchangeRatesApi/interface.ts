export interface IAdvert {
  _id: string;
  advertStatus: string;
  user: any;
  assetAvailable: number;
  currencyPair: any;
  advertType: string;
  price: number;
  minimumTradingVolume: number;
  maximumTradingVolume: number;
  isSupervised: boolean;
  descriptions: string;
  tradeNotes: string;
  tags: [string];
  status: boolean;
  deletedAt: string;
  createdAt: string | Date;
  updatedAt: string;
  __v: number;
  merchantBankDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    accountType: string;
  };
}
export interface ICurrency {
  _id: string;
  name: string;
  currencyType: string;
  currencySymbol: string;
  imageUrl: string;
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

export type ITrend = "UP" | "DOWN";
export interface IExchangeSummaryData {
  buyPrice: number;
  buyTrend: ITrend;
  createdAt: string;
  currencyPair: ICurrencyPair;
  deletedAt: string;
  isActive: boolean;
  isDeleted: boolean;
  sellPrice: number;
  sellTrend: ITrend;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface IExchangeSummary {
  date: string;
  data: IExchangeSummaryData[];
}

export interface ICurrentRates {
  buyPrice: number;
  buyTrend: ITrend;
  createdAt: string;
  currencyPair: ICurrencyPair;
  deletedAt: string;
  isActive: boolean;
  isDeleted: boolean;
  sellPrice: number;
  sellTrend: ITrend;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface IAdvertStats {
  totalAdverts: number;
  activeAdverts: number;
  buyAdverts: number;
  sellAdverts: number;
}

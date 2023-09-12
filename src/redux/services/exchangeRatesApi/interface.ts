import { ICurrencyPair } from "../currencyPairApi/interface";

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

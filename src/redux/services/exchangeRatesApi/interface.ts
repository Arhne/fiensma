import { IUser } from "../auth/interface";
import { ICurrencyPair } from "../currencyPairApi/interface";

export interface IAdvert {
	_id: string;
	advertStatus: string;
	user: IUser;
	assetAvailable: number;
	currencyPair: ICurrencyPair;
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

export interface IAdvertStats {
	totalAdverts: number;
	activeAdverts: number;
	buyAdverts: number;
	sellAdverts: number;
}

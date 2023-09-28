export interface IConfig {
  _id: string;
  partnerChargePerTrade: number;
  serviceChargeOnPartnerCharge: number;
  socialLinks: ISocialLinks;
  supportNumber: string;
  isActive: boolean;
  isDeleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISocialLinks {
  facebook: string;
  tiktok: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  instagram: string;
}

export interface ISetup {
  _id: string;
  partnerChargePerTrade: number;
  serviceChargeOnPartnerCharge: number;
  supportNumber: string;
  socialLinks: ISocialLinks;
  isActive: boolean;
  isDeleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}

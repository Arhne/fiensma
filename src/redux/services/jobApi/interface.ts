export interface IJob {
  _id: string;
  role: string;
  title: string;
  description: string;
  category: string;
  location: string;
  schedule: string;
  status: boolean;
  isDeleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IApplicant {
  _id: string;
  job: string;
  firstName: string;
  lastName: string;
  email: string;
  applicantCV: string;
  status: boolean;
  isAccepted: boolean;
  isDeleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

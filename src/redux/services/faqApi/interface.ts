export interface IFaq {
    _id: string;
    question: string;
    answer: string;
    // status: boolean;
    isDeleted: boolean;
    deletedAt: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    __v: number;
}

export interface IFaqStats {
    totalFAQ: number;
    totalActiveFAQ: number;
    totalInactiveFAQ: number;
}

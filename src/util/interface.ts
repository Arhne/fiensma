export interface PaginatedResponse<T> {
  message: string | undefined;
  data: T;
  pagination: {
    perPage: number;
    currentPage: number;
    totalPages: number;
    totalDocumentCount: number;
  };
}

export interface Response<T> {
  message: string | undefined;
  data: T;
}

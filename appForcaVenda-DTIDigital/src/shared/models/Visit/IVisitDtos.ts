export interface IVisitReadDto {
  visitCompleted?: boolean;
  customerId?: string;
  schedule?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IVisitCreateDto {
  visitCompleted?: boolean;
  customerId?: string;
  schedule?: Date;
}

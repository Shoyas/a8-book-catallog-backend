import { Prisma, StatusEnum } from '@prisma/client';

export type ICreateOrderInput = {
  userId: string;
  orderedBooks: Prisma.InputJsonValue;
  status: StatusEnum;
  createdAt: Date;
};

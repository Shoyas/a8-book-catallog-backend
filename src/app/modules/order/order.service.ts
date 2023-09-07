import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ICreateOrderInput } from './order.interface';

const createOrder = async (data: ICreateOrderInput): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getAllOrders = async (userId: string) => {
  const result = await prisma.order.findMany({
    where: {
      userId: userId,
    },
    include: {
      user: true,
    },
  });

  return result;
};
const getAllOrdersForAdmin = async () => {
  const result = await prisma.order.findMany({
    include: {
      user: true,
    },
  });

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getAllOrdersForAdmin,
};

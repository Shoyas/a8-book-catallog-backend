import { Category } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllCategories = async () => {
  const result = await prisma.category.findMany({
    include: {
      books: true,
    },
  });
  return result;
};

const getSingleCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });

  return result;
};

const updateCategory = async (
  id: string,
  payload: Partial<Category>
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    include: {
      books: true,
    },
    data: payload,
  });

  return result;
};

const deleteCategory = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });

  return result;
};

const getAllBooksByCategoryId = async (
  id: string,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Category[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const result = await prisma.category.findMany({
    where: {
      id,
    },
    include: {
      books: {
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      },
    },
  });

  const books = result[0]?.books || [];

  const total = books.length;

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: books,
  };
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,

  getAllBooksByCategoryId,
};

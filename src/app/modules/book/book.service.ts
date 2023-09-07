import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { bookSearchableFields } from './book.constant';
import { IBookFilters } from './book.interface';

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

//! getAllBooks needs filtering, getAllBooksByCategoryId is not completed

// const getAllBooks = async () => {
//   const result = await prisma.book.findMany({
//     include: {
//       category: true,
//     },
//   });
//   return result;
// };

const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: any = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const { minPrice, maxPrice } = paginationOptions;
  const query: any = {};

  if (minPrice !== undefined) {
    query.price = { ...query.price, $gte: minPrice };
  }
  if (maxPrice !== undefined) {
    query.price = { ...query.price, $lte: maxPrice };
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const total = await prisma.book.count({
    where: whereConditions,
  });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// const getAllBooksByCategoryId = async (
//   id: string,
//   paginationOptions: IPaginationOptions
// ): Promise<Category[] | null> => {
//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions);

//   // const andConditions = [];
//   // const sortConditions: any = {};
//   // if (sortBy && sortOrder) {
//   //   sortConditions[sortBy] = sortOrder;
//   // }
//   // const whereConditions: Prisma.CategoryWhereInput =
//   //   andConditions.length > 0 ? { OR: andConditions } : {};
//   const result = await prisma.category.findMany({
//     where: {
//       id,
//       // whereConditions,
//     },
//     include: {
//       books: true,
//     },
//     skip,
//     take: limit,
//     orderBy: {
//       [sortBy]: sortOrder,
//     },
//   });
//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateSingleBook = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteBook = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,

  getSingleBook,
  updateSingleBook,
  deleteBook,
};

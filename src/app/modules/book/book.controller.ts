import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookFilterableFields, paginationFields } from './book.constant';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book created successfully',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await BookService.getAllBooks(filters, paginationOptions);
  // console.log('Get All book: ', result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books fetched successfully',
    data: result,
  });
});

// const getAllBooksByCategoryId = catchAsync(
//   async (req: Request, res: Response) => {
//     const result = await CategoryService.getSingleCategory(req.params.id);
//     // console.log('getAllBooksByCategoryId : ', result);
//     sendResponse(res, {
//       success: true,
//       statusCode: httpStatus.OK,
//       message: 'Books with associated category data fetched successfully',
//       data: result,
//     });
//   }
// );

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book fetched successfully',
    data: result,
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BookService.updateSingleBook(id, payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,

  getSingleBook,
  updateSingleBook,
  deleteBook,
};

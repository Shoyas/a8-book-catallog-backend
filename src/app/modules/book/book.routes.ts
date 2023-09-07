import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CategoryController } from '../category/category.controller';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/:id/category', CategoryController.getAllBooksByCategoryId);
router.get('/:id', BookController.getSingleBook);
router.get('/', BookController.getAllBooks);
router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.createBook
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.updateSingleBook
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.deleteBook
);

export const BookRoutes = router;

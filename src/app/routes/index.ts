import express from 'express';
import { BookRoutes } from '../modules/book/book.routes';
import { CategoryRotes } from '../modules/category/category.routes';
import { orderRotes } from '../modules/order/order.routes';
import { UserRoutes } from '../modules/user/auth.routes';
import { UserRoute } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/categories',
    route: CategoryRotes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/orders',
    route: orderRotes,
  },
  {
    path: '/profile',
    route: UserRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../modules/book/book.routes");
const category_routes_1 = require("../modules/category/category.routes");
const order_routes_1 = require("../modules/order/order.routes");
const auth_routes_1 = require("../modules/user/auth.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.UserRoutes,
    },
    {
        path: '/users',
        route: user_routes_1.UserRoute,
    },
    {
        path: '/categories',
        route: category_routes_1.CategoryRotes,
    },
    {
        path: '/books',
        route: book_routes_1.BookRoutes,
    },
    {
        path: '/orders',
        route: order_routes_1.orderRotes,
    },
    {
        path: '/profile',
        route: auth_routes_1.UserRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;

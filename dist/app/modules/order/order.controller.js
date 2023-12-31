"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    let verifiedUser = null;
    verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    req.user = verifiedUser; // role  , userid
    const userId = req.user.userId;
    //   console.log('User : ', userId);
    const orderData = {
        userId: userId,
        orderedBooks: req.body.orderedBooks,
        status: req.body.status,
        createdAt: new Date(),
    };
    const result = yield order_service_1.OrderService.createOrder(orderData);
    console.log('Create Order: ', result);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Order created successfully',
        data: result,
    });
}));
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('Request Headers: ', req.headers);
    // const token: any = req.headers.authorization;
    // console.log('get Order token: ', token);
    const user = req.user;
    // console.log('Ordering UserID: ', user.userId);
    const result = yield order_service_1.OrderService.getAllOrders(user.userId);
    console.log('get Order: ', result);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Orders retrieved successfully',
        data: result,
    });
}));
const getAllOrdersForAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getAllOrdersForAdmin();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Orders retrieved successfully',
        data: result,
    });
}));
exports.OrderController = {
    createOrder,
    getAllOrders,
    getAllOrdersForAdmin,
};

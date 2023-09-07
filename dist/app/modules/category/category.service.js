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
exports.CategoryService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.create({
        data,
    });
    return result;
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.findMany({
        include: {
            books: true,
        },
    });
    return result;
});
const getSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.findUnique({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });
    return result;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.update({
        where: {
            id,
        },
        include: {
            books: true,
        },
        data: payload,
    });
    return result;
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.delete({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });
    return result;
});
const getAllBooksByCategoryId = (id, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const result = yield prisma_1.default.category.findMany({
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
    const books = ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.books) || [];
    const total = books.length;
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: books,
    };
});
exports.CategoryService = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    getAllBooksByCategoryId,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationFields = exports.bookFilterableFields = exports.bookSearchableFields = void 0;
exports.bookSearchableFields = ['title', 'author', 'genre'];
exports.bookFilterableFields = ['searchTerm', 'page', 'size', 'category'];
exports.paginationFields = [
    'page',
    'size',
    'limit',
    'sortBy',
    'sortOrder',
    'minPrice',
    'maxPrice',
];

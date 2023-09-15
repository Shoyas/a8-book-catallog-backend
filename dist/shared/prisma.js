"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const config_1 = __importDefault(require("../config"));
const prisma = new client_1.PrismaClient({
    errorFormat: 'minimal',
    datasources: { db: { url: config_1.default.database_url } },
});
exports.default = prisma;
// const prisma = new PrismaClient({ datasources: {  db: { url: "mysql://yourdburlstringhere" } } });

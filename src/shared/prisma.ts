import { PrismaClient } from '@prisma/client';
import config from '../config';

const prisma = new PrismaClient({
  errorFormat: 'minimal',
  datasources: { db: { url: config.database_url } },
});

export default prisma;

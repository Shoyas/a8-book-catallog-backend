import { Server } from 'http';
import app from './app';
import config from './config';

async function main() {
  const server: Server = app.listen(config.port, () =>
    // logger.info(`Server running on port ${config.port}`);
    console.log(`Server running on port ${config.port}`)
  );

  const exitHandler = () => {
    if (server) {
      server.close(() =>
        // logger.info('Server closed');
        console.log('Server closed')
      );
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = () => {
    // errorlogger.error(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    'SIGTERM received';
    if (server) {
      server.close();
    }
  });
}

main();

/*
import { PrismaClient } from '@prisma/client';
import express from 'express';
import config from './config';

const prisma = new PrismaClient();
const app = express();

async function main() {
  try {
    await prisma.$connect();
    console.log('Database is connected successfully....');

    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database....', error);
  }
}

main();
*/

import express from 'express';
import config from './config';
import prisma from './shared/prisma';

const app = express();

async function main() {
  try {
    await prisma.$connect();
    console.log('Database is connected successfully....');

    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database....', error);
  }
}

main();

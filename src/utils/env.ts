import logger from './logger';
import dotenv from 'dotenv';

logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);

export const IsProductionEnvironment = process.env.NODE_ENV === 'production';

if (!IsProductionEnvironment) {
  logger.info('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

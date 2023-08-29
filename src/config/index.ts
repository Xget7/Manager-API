import dotenv from 'dotenv';

const configFile = `./.env`;
dotenv.config({ path: configFile });

export const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  SECRET: process.env.SECRET,
};

import dotenv from 'dotenv';

const configFile = `./.env`;
dotenv.config({ path: configFile });


export const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  SECRET: process.env.SECRET,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_PRIVATE_ACCESS_KEY: process.env.AWS_PRIVATE_ACCESS_KEY,
  REGION : process.env.REGION,
};

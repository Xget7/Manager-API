import mongoose from 'mongoose';
import { config } from '../config/index';



export const connectToDatabase  = async () => {
     try {
          await mongoose.connect(config.DB_URL);
          console.log('Connected to MongoDB');
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
          process.exit(1); // Exit the process with an error
     }
};

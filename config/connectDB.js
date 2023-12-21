import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  const db_url =
    process.env.MONGO_URI || "mongodb://localhost:27017/Task-Manager";

  try {
    const mongooseConnection = await mongoose.connect(db_url);
    console.info(chalk.bold.underline.cyan(`MongoDB Connected: ${mongooseConnection.connection.host}`));
  } catch (error) {
    console.error(chalk.bold.underline.red(`Error connecting to MongoDB: ${error.message}`));
  }
};

export default connectDB;

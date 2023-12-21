import "dotenv/config";
import express from "express";
import cors from "cors";
import chalk from "chalk";
import connectDB from "./config/connectDB.js";
import taskRoutes from "./routes/routes.js";

const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests (needed if your application handles form submissions)

app.get("/", async (req, res) => {
  res.send("Hello developer! API is working.");
});

app.use("/api/v1", taskRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.info(chalk.bold.yellow(`Server is running in ${process.env.NODE_ENV} mode on port ${port}🔥`));
});

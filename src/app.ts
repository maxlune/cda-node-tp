import dotenv from "dotenv";
dotenv.config();
import express from "express";
import env from "./config/env";
import router from "./infrastructure/web/routes";
import { requestLogger } from "./middlewares/logger";

const app = express();

const { PORT } = env;

app.use(requestLogger);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./config/env"));
const routes_1 = __importDefault(require("./infrastructure/web/routes"));
const logger_1 = require("./middlewares/logger");
const app = (0, express_1.default)();
const { PORT } = env_1.default;
app.use(logger_1.requestLogger);
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

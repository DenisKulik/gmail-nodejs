"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
    methods: 'POST',
};
const jsonBodyMiddleware = express_1.default.json();
const urlencodedMiddleware = express_1.default.urlencoded({ extended: false });
const corsMiddleware = (0, cors_1.default)(corsOptions);
app.use(corsMiddleware);
app.use(urlencodedMiddleware);
app.use(jsonBodyMiddleware);
const emailRouter = (0, routes_1.getEmailRouter)();
app.use('', emailRouter);
exports.default = app;

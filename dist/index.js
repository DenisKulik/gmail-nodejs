"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
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
const smtp_login = process.env.SMTP_LOGIN;
const smtp_password = process.env.SMTP_PASSWORD;
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: smtp_login,
        pass: smtp_password,
    },
    tls: {
        rejectUnauthorized: false,
    },
});
app.post('/sendMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    const htmlMessage = `
    	<html>
    		<head></head>
    		<body>
        	<h2>FEEDBACK FORM</h2>
        	<p><strong>Name:</strong> ${name}</p>
        	<p><strong>Email:</strong> ${email}</p>
        	<p><strong>Message:</strong> ${message}</p>
    		</body>
    </html>
		`;
    yield transporter.sendMail({
        from: 'Portfolio <kdp-work@mail.ru>',
        to: 'kulikdenis1996x@gmail.com',
        subject: 'FEEDBACK FORM',
        html: htmlMessage,
    });
    res.send('ok');
}));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});

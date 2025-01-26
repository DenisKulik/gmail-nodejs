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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailRouter = void 0;
const express_1 = require("express");
const types_1 = require("../types");
const adapters_1 = require("../adapters");
const getEmailRouter = () => {
    const router = (0, express_1.Router)();
    router.post('/sendMessage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, message } = req.body;
            yield adapters_1.EmailAdapter.sendEmail(name, email, message);
            res.status(types_1.HttpStatuses.OK).send('Message sent successfully.');
        }
        catch (error) {
            console.error('Error sending email:', error);
            res
                .status(types_1.HttpStatuses.INTERNAL_SERVER_ERROR)
                .send('Failed to send the message. Please try again later.');
        }
    }));
    return router;
};
exports.getEmailRouter = getEmailRouter;

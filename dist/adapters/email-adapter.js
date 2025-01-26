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
exports.EmailAdapter = void 0;
const utils_1 = require("../utils");
const services_1 = require("../services");
exports.EmailAdapter = {
    sendEmail(name, email, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlMessage = (0, utils_1.createHtmlMessage)(name, email, message);
            const info = yield services_1.emailTransporter.sendMail({
                from: 'Portfolio <kdp-work@mail.ru>',
                to: 'kulikdenis1996x@gmail.com',
                subject: 'FEEDBACK FORM',
                html: htmlMessage,
            });
            return info;
        });
    },
};

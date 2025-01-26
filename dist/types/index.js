"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatuses = void 0;
var HttpStatuses;
(function (HttpStatuses) {
    HttpStatuses[HttpStatuses["OK"] = 200] = "OK";
    HttpStatuses[HttpStatuses["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatuses[HttpStatuses["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatuses[HttpStatuses["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatuses[HttpStatuses["CREATED"] = 201] = "CREATED";
    HttpStatuses[HttpStatuses["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatuses[HttpStatuses["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatuses || (exports.HttpStatuses = HttpStatuses = {}));

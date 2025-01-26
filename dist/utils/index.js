"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHtmlMessage = void 0;
const createHtmlMessage = (name, email, message) => {
    return `
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
};
exports.createHtmlMessage = createHtmlMessage;

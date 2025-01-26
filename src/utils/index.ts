export const createHtmlMessage = (name: string, email: string, message: string): string => {
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
  `
}

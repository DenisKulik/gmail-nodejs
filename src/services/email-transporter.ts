import nodemailer from 'nodemailer'

const smtp_login = process.env.SMTP_LOGIN
const smtp_password = process.env.SMTP_PASSWORD

export const emailTransporter = nodemailer.createTransport({
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
})

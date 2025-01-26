import { createHtmlMessage } from '../utils'
import { emailTransporter } from '../services'

export const EmailAdapter = {
  async sendEmail(name: string, email: string, message: string) {
    const htmlMessage = createHtmlMessage(name, email, message)
    const info = await emailTransporter.sendMail({
      from: 'Portfolio <kdp-work@mail.ru>',
      to: 'kulikdenis1996x@gmail.com',
      subject: 'FEEDBACK FORM',
      html: htmlMessage,
    })
    return info
  },
}

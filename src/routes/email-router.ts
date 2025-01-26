import { Router, Response } from 'express'
import { emailTransporter } from '../services'
import { FeedbackForm, HttpStatuses, RequestBody } from '../types'
import { createHtmlMessage } from '../utils'

export const getEmailRouter = () => {
  const router = Router()

  router.post('/sendMessage', async (req: RequestBody<FeedbackForm>, res: Response) => {
    const { name, email, message } = req.body

    try {
      const htmlMessage = createHtmlMessage(name, email, message)

      await emailTransporter.sendMail({
        from: 'Portfolio <kdp-work@mail.ru>',
        to: 'kulikdenis1996x@gmail.com',
        subject: 'FEEDBACK FORM',
        html: htmlMessage,
      })

      res.status(HttpStatuses.OK).send('Message sent successfully.')
    } catch (error) {
      console.error('Error sending email:', error)
      res
        .status(HttpStatuses.INTERNAL_SERVER_ERROR)
        .send('Failed to send the message. Please try again later.')
    }
  })

  return router
}

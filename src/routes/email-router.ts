import { Router, Response } from 'express'
import { FeedbackForm, HttpStatuses, RequestBody } from '../types'
import { EmailAdapter } from '../adapters'

export const getEmailRouter = () => {
  const router = Router()

  router.post('/sendMessage', async (req: RequestBody<FeedbackForm>, res: Response) => {
    try {
      const { name, email, message } = req.body
      await EmailAdapter.sendEmail(name, email, message)
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

const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
    origin: '*',
    methods: 'POST',
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const smtp_login = process.env.SMTP_LOGIN
const smtp_password = process.env.SMTP_PASSWORD

const transporter = nodemailer.createTransport({
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

app.post('/sendMessage', async (req, res) => {
    const { name, email, message } = req.body

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
		`

    await transporter.sendMail({
        from: 'Portfolio <kdp-work@mail.ru>',
        to: 'kulikdenis1996x@gmail.com',
        subject: 'FEEDBACK FORM',
        html: htmlMessage,
    })

    res.send('ok')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port`)
})

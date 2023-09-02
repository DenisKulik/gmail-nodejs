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

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'kdp-work@mail.ru',
        pass: 'cd9Mwh8RpJhGmt2xYLMz',
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

app.listen(3000, () => {
    console.log(`Example app listening on port`)
})

const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

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

app.get('/sendMessage', async (req, res) => {
    const info = await transporter.sendMail({
        from: 'Portfolio <kdp-work@mail.ru>',
        to: 'kulikdenis1996x@gmail.com',
        subject: 'FEEDBACK FORM',
        text: 'Test',
    })

    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log(`Example app listening on port`)
})

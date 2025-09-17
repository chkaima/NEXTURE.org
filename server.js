const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gojoryoumen132@gmail.com',
        pass: 'ucjf qmig iosf njvh'
    }
});

app.post('/notify', async (req, res) => {
    try {
        await transporter.sendMail({
            from: '"Shop Notification" <gojoryoumen132@gmail.com>',
            to: 'gojoryoumen132@gmail.com',
            subject: 'New Purchase!',
            text: 'Someone clicked Buy Now!'
        });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
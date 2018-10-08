let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'pablito9999gold@gmail.com',
        pass: 'Mecontrata123'
    },
    tls: { rejectUnauthorized: false }
});

let mailOptions = {
    from: 'pablito9999gold@gmail.com',
    to: 'mail@nukearts.nu',
    subject: 'Matheus Ramos',
    text: 'That was easy! hu3'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
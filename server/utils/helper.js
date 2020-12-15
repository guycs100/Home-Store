const nodemailer = require('nodemailer');


const sendEmail = async (mail, res) => {

    const transporter = nodemailer.createTransport({
        host: "google.com",
        service: 'gmail',
        secure: false,//true
        port: 25,//465
        auth: {
            user: 'elik56a@gmail.com',
            pass: '********',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'elik56a@gmail.com',
        to: 'elik56a@gmail.com',
        subject: `התקבלה הודעה באתר פדידה סטור`,
        html: `
            <h3>  שם הלקוח : ${mail.name} </h3>
            <h3>  נושא ההודעה : ${mail.subject} </h3>
            <h3> כתובת המייל של הלקוח:  ${mail.email}  </h3>
            <h3> תוכן ההודעה : </h3>
            <p>
            ${mail.text}
            </p>
        `,
    };



    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            console.error(error);
            res.send({ success: false })
        } else {
            res.send({ success: true })
            console.log('Message succesfully sent:');
            transport.close();

        }
    })
};

module.exports = { sendEmail }

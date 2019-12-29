const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');


function sellerEmail(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            auth: {
                api_user: 'SainezKimutai', // Sendgrid username
                api_key: 'saineZ@13' // Sendgrid password
            }
        }

        let transporter = nodemailer.createTransport(sgTransport(options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            subject: "Sokoni.Com",
            text: 'Hello',
            html: 'Please confirm your email by clicking the email bellow:<br><br> <button style="margin-left:70px;border:none;padding:7px;border-radius:5px;background-color:lime;color:white;"><a style="color:white;font-size:14px;font-family:verdana" href="http://localhost:4200/seller_registration/' + reqParam.reciever + '/' + reqParam.token + '">Invitation</a></button>'
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });


    });
}


module.exports = { sellerEmail }

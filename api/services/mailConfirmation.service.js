const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');


function sellerEmail(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'muindegeofrey@gmail.com',
                pass: 'Gracemakau2019'
            }
        }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            subject: "Email Confirmation",
            html: ' <section style="width: 400px; height: 200px; background-color: #f6f6f6; margin: 20px 100px; border-radius: 2px; border: solid 1px #4ec293; padding: 1em;">' +
              '<div style="font-size: 13px; margin-bottom: 20px;"> Hello </div>' +
              '<div style="font-size: 12px; margin-bottom: 20px;">Please confirm your email by clicking the button below.</div>' +
              '<div style="margin-bottom: 20px;">'+
                  '<a style="font-size: 13px; background-color: #4ec293; border-radius: 2px; color: white; border: none; cursor: pointer; padding: 8px;" '+
                  'href="http://64.227.8.69:3000/seller_registration/' + reqParam.reciever + '/' + reqParam.token + '">Confirm Email</a>'+
              '</div>'+
              '<div style="font-size: 10px; font-style: italic;">www.tijaraafrica.com</div>'+
            '</section>'
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });


    });
}


function buyerEmail(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "smtp.gmail.com",
          port: 465,
          auth: {
              user: 'muindegeofrey@gmail.com',
              pass: 'Gracemakau2019'
          }
      }

        let transporter = nodemailer.createTransport(sgTransport(options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            subject: "Email Confirmation",
            html: ' <section style="width: 400px; height: 200px; background-color: #f6f6f6; margin: 20px 100px; border-radius: 2px; border: solid 1px #2ebccd; padding: 1em;">' +
              '<div style="font-size: 13px; margin-bottom: 20px;"> Hello </div>' +
              '<div style="font-size: 12px; margin-bottom: 20px;">Please confirm your email by clicking the button below.</div>' +
              '<div style="margin-bottom: 20px;">'+
                  '<a style="font-size: 13px; background-color: #2ebccd; border-radius: 2px; color: white; border: none; cursor: pointer; padding: 8px;" '+
                  'href="http://64.227.8.69:3000/buyer_registration/' + reqParam.reciever + '/' + reqParam.token + '">Confirm Email</a>'+
              '</div>'+
              '<div style="font-size: 10px; font-style: italic;">www.tijaraafrica.com</div>'+
            '</section>'
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });


    });
}


module.exports = { sellerEmail, buyerEmail }

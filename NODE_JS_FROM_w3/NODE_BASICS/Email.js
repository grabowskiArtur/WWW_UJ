const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'wp',
    auth:{
        user: 'artur.grabowski93@wp.pl',
        pass: 'C.Ronaldo#9#'
    }
});

const mailOptions = {
    from : 'artur.grabowski93@wp.pl',
    to   : 'artur.grabowski93@wp.pl',
    subject : 'Mail wyslany z Node.js',
    text : 'Damn it, how easy it is! :O'
};

transporter.sendMail(mailOptions,function (error, info) {
   if (error){
       console.log(error);
   } else {
     console.log("Email sent: " + info.response);
   }
});



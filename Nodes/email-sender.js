var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'munyia123456@gmail.com',
    pass: 'Munyia@123'
  }
});

var mailOptions = {
  from: 'munyia123456@gmail.com',
  to: 'okekedavid1333@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



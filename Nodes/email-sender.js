var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ndidiranjo@gmail.com',
    pass: 'tnfh lsye jhes yxlz'
  }
});

var mailOptions = {
  from: 'ndidiranjo@gmail.com',
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



const express = require('express');
const nodemailer = require("nodemailer");

const app = express();

app.get('/', async (req, res) => {
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  try {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "andraz.amtec@gmail.com", // generated ethereal user
      pass: "", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'andraz.amtec@gmail.com', // sender address
    to: "", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (e) {
    console.log(e);
  }
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
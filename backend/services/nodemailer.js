const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


const SendMail = async(tomail,subject,message) => {
    try {
  const info = await transporter.sendMail({
    from: '"Account" <vikas.boxfy@gmail.com>', // sender address
    to: tomail, // list of recipients
    subject, // subject line
    html:message, // HTML body
  });

  console.log("Message sent: %s", info.messageId);
} catch (err) {
  console.error("Error while sending mail:", err);
}

}

module.exports = SendMail
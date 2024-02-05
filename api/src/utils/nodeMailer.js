import nodemailer from "nodemailer";

//smtp configurations
export const accountVerificationEmail = async (user, link) => {
  const { email, fName, lName } = user;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: "gmail",
    secure: true, // use the secure connection (SSL/TLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log(process.env.EMAIL_USER);
  // /send mail with defined transport object

  const info = await transporter.sendMail({
    from: `"CarQuest" <${process.env.EMAIL_USER}>`, //sender address
    to: email, // list of receivers
    subject: "VERIFICATION REQUIRED ✔", //subject line
    text: "Hello ?" + fName + "follow the link to activate your account" + link,
    html: `
      <p>
      Hello ${fName.toUpperCase()}${lName.toUpperCase()}
      </p>

      <p>
      Please follow the link below to activate your account.
      </p>

      <br/>
      <br/>

      <p>
     <a href=${link}> ${link} </a>
      </p>

      <br/>
      <br/>

      <p>
      Regards,<br/>
      CarQuest <br/>
      Customer Support Team

        `,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

//booking confirmation
//smtp configurations
export const bookingConfirmationEmail = async (user, result) => {
  const { email, fName, lName } = user;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use the secure connection (SSL/TLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // /send mail with defined transport object

  const info = await transporter.sendMail({
    from: `"CarQuest" <${process.env.EMAIL_USER}>`, //sender address
    to: email, // list of receivers
    subject: "Booking received", //subject line
    text: `Dear" + fName + "We have received your order. Your Order ID is: ${result?._id}`,
    html: `
      <p>
      Dear ${fName.toUpperCase()}${lName.toUpperCase()}
      </p>

      <p>
      We have received your order.
      </p>

      <br/>
      <br/>

      <p>
    Your Order ID is : ${result?._id}
      </p>

      <br/>
      <br/>

      <p>
      Regards,<br/>
      CarQuest <br/>
      Customer Support Team

        `,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

//password Reset

export const sendPasswordResetLink = async (user, link) => {
  const { email, fName, lName } = user;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use the secure connection (SSL/TLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // /send mail with defined transport object

  const info = await transporter.sendMail({
    from: `"CarQuest" <${process.env.EMAIL_USER}>`, //sender address
    to: email, // list of receivers
    subject: "Password Reset", //subject line
    text: `Hello ${fName}`,
    html: `
      <p>
    You are receiving this email because a password reset request was initiated for your account.
      </p>
      <p>
    If you did not request this, please disregard this email.
      </p>
<br/>
<br/>
      <p>
   To reset your password, click on following link:
   <a href=${link}> Reset Password </a>
   
      </p>

      <br/>
      <br/>

      


      <p>
      Regards,<br/>
      CarQuest <br/>
      Customer Support Team

        `,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

import nodemailer from 'nodemailer';

export const mailer = async({ name, email, message }: any)=>{
   try{
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASSWORD
        }
      });

      const mailOptions = {
        from: email,
        to: 'fackwuwu@gmail.com',
        subject: "Message sended from portfolio",
        html: `<p>
        name: ${name}<br />
        email: ${email} <br />
        message: ${message}<br />
        </P>`

    }
    console.log(transporter, "options:", mailOptions)
    const mailresponse = await transporter.sendMail(mailOptions)
    return mailresponse;
}
catch(error: any){
    throw new Error(error.message)
}
}

export default async function  handler(req , res) {

  const sgMail = require('@sendgrid/mail')
  // const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

sgMail.setApiKey('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')

  const data = JSON.stringify(req.body)

  console.log(data.notesInput)


  const msg = {
    to: 'suprawhiz@gmail.com', // Change to your recipient
    from: 'snow.derrickl@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })}
// export { sendEmail };

// export default async function handler (req, res) {
//     await mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID)


//     const appContractor = await req.contractor

//   const msg = await {
//     to: 'suprawhiz@gmail.com',
//     from: 'suprawhiz@gmail.com',
//     subject: 'JOB APPLICATION:',
//     text: appContractor,
//     html: appContractor
//   }


//     try {
//       await msg.send();
//     } catch (error) {
//       console.error(error);
  
//       if (error.response) {
//         console.error(error.response.body)
//       }
//     }
//   }


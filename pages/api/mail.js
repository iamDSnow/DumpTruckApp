
export default async function  handler(req , res) {

  const sgMail = require('@sendgrid/mail')
  // const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

  const data = JSON.stringify(req.body)

  console.log(data)


  const msg = await {
    to: 'suprawhiz@gmail.com',
    from: 'suprawhiz@gmail.com',
    subject: 'JOB APPLICATION:',
    text: data.notesInput,
    html: data.notesInput
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


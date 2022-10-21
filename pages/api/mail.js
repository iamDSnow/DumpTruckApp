const mail = require('@sendgrid/mail')

export default async function(req, res) {

  mail.setApiKey('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')


  // const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
  
  const data = JSON.stringify(req.body)

  // console.log(data.company)


  const msg = await {
    to: 'suprawhiz@gmail.com',
    from: 'snow.derrickl@gmail.com',
    subject: 'JOB APPLICATION:',
    text: data,
    html: '<p>test<p>'
  }

  try {
    await mail.send(msg)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log(error.response.data, error)
    res.status(400).send('Message not sent.')
  }




//   try{
//   await fetch(
//     SENDGRID_API,
//     {
//       method: "POST",
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
//       body: JSON.stringify({
//         personalizations: [
//           {
//             to: [
//               {
//                 email: 'snow.derrickl@gmail.com'
//               }
//             ],
//             subject: 'Demo success :)'
//           }
//         ],
//         from: {
//           email: 'suprawhiz@gmail.com',
//           name: 'Test SendGrid'
//         },
//         content: [
//           {
//             type: 'text/html',
//             value: `test`
//           }
//         ]
//       }),
  
//         }
//   )
 

//   return res.status(200).json()

// }
//   catch (err){
//     return res.status(500).json({message: 'something went wrong'})
//   }

}

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


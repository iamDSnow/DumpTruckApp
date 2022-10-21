const mail = require('@sendgrid/mail')
const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

export default async function  handler(req , res) {

  const data = JSON.stringify(req.body)

  console.log(data)


  const msg = await {
    to: 'suprawhiz@gmail.com',
    from: 'suprawhiz@gmail.com',
    subject: 'JOB APPLICATION:',
    text: data.notesInput,
    html: data.notesInput
  }
  try{
  await fetch(
    SENDGRID_API,
    {
      method: "POST",
      body: msg,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID}`,
        }
  )
 

  return res.status(200).json({ revalidated: true })

}
  catch (err){
    return res.status(500).json({message: 'something went wrong'})
  }

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


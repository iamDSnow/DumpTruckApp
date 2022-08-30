const mail = require('@sendgrid/mail')

export default async function handler (req, res) {
    
  await mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID)

    
  const appContractor = req.contractor

  const msg = {
    to: 'snow.derrickl@gmail.com',
    from: 'suprawhiz@gmail.com',
    subject: 'JOB APPLICATION:',
    text: appContractor,
    html: appContractor
  }


  await mail.send(msg)


   res.status(200).json({ status: true })
}


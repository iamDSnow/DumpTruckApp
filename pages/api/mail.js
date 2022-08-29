const mail = require('@sendgrid/mail')

export default async function handler (req, res) {
    await mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID)

    
  const appContractor = req.contractor

  const msg = {
    to: 'suprawhiz@gmail.com',
    from: 'suprawhiz@gmail.com',
    subject: 'JOB APPLICATION:',
    text: appContractor,
    html: appContractor
  }


  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })()
}

const mail = require('@sendgrid/mail')

export default async function handler (req, res) {
    await mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID)

    
    const appContractor = await req.contractor

  const msg = await {
    to: 'suprawhiz@gmail.com',
    from: 'suprawhiz@gmail.com',
    subject: 'JOB APPLICATION:',
    text: appContractor,
    html: appContractor
  }


    try {
      await msg.send();
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }


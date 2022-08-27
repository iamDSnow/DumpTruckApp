const mail = require('@sendgrid/mail')

export default async function handler (req, res) {
  const appContractor = req.contractor

  const msg = {
    to: 'suprawhiz@gmail.com',
    from: 'suprawhiz@gmail.com',
    subject: 'JOB APPLICATION:',
    text: appContractor,
    html: appContractor
  }

  await mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID)

  await mail.send(msg)

  await (res => {
    return res.status(200).json({ status: 'Ok' })
  })

  await (error => {
    console.error('error')
    return error
  })
}

require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'swapnil_gundoji@live.com.au',
  from: 'swapnil_gundoji@live.com.au',
  subject: 'Test Message with sendgrid',
  text: 'just testing',
}

sgMail.send(msg)

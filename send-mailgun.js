import FormData from 'form-data' // form-data v4.0.1
import Mailgun from 'mailgun.js' // mailgun.js v11.1.0
import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
import path from 'path'

const imagePath = path.join('src', 'assets', 'homepagecartoon.png')

async function sendSimpleMessage() {
  const mailgun = new Mailgun(FormData)
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  })
  try {
    const data = await mg.messages.create('sandboxdd414f3798a74f9a9234b1ef3089ea99.mailgun.org', {
      from: 'Mailgun Sandbox <postmaster@sandboxdd414f3798a74f9a9234b1ef3089ea99.mailgun.org>',
      to: ['Swapnil Gundoji <swapnilgundoji@gmail.com>'],
      subject: 'Hello Swapnil Gundoji',
      text: 'Hello!!',
      attachment: fs.createReadStream(imagePath),
    })

    console.log(data) // logs response data
  } catch (error) {
    console.log(error) //logs any error
  }
}

sendSimpleMessage()

const { onRequest } = require('firebase-functions/v2/https')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

admin.initializeApp()

exports.getAllAccessibilityProviders = onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const accessibilityProvidersCollection = admin
        .firestore()
        .collection('accessibilityProviders')
      const snapshot = await accessibilityProvidersCollection.get()
      const accessibilityProviders = snapshot.docs.map((doc) => ({
        id: doc.id,
        providerName: doc.data().providerName,
        serviceType: doc.data().serviceType,
        email: doc.data().contactEmail,
        phoneNumber: doc.data().phoneNumber,
        region: doc.data().region,
      }))

      res.status(200).json(accessibilityProviders)
    } catch (error) {
      console.error('Error fetching accessibility providers:', error.message)
      res.status(500).send('Error fetching accessibility providers')
    }
  })
})

exports.getUsers = onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const usersCollection = admin.firestore().collection('users')
      const snapshot = await usersCollection.get()
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        email: doc.data().email,
        isAdmin: doc.data().isAdmin,
      }))

      res.status(200).json(users)
    } catch (error) {
      console.error('Error fetching accessibility providers:', error.message)
      res.status(500).send('Error fetching accessibility providers')
    }
  })
})

const functions = require('firebase-functions')
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'disabilityconnectautest@gmail.com',
    pass: 'jhxv shtm hvow skev',
  },
})

app.get('/', (request, response) => {
  const from = 'disabilityconnectautest@gmail.com'
  const { to, subject, text } = request.query
  const msg = {
    to,
    from,
    subject,
    text,
    html: `<strong>${text}</strong>`,
    attachments: [
      {
        filename: 'Newsletter.txt',
        content: 'Hello',
        contentType: 'text/plain',
      },
    ],
  }
  transporter
    .sendMail(msg)
    .then(() => {
      response.status(200).send('Email sent')
    })
    .catch((error) => {
      response.status(500).send(error.toString())
    })
})

exports.email = functions.https.onRequest(app)

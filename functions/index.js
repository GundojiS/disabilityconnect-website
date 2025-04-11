/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const functions = require('firebase-functions')
// const admin = require('firebase-admin')
// admin.initializeApp()

// exports.addAdminRole = functions.https.onCall((data, context) => {
//   // Get the user ID from the data
//   const email = data.email

//   // Check if request is authenticated
//   if (!context.auth) {
//     throw new functions.https.HttpsError('unauthenticated', 'Request not authenticated')
//   }

//   // Get user record from email
//   return admin
//     .auth()
//     .getUserByEmail(email)
//     .then((userRecord) => {
//       // Set the custom claim for the user
//       return admin.auth().setCustomUserClaims(userRecord.uid, { admin: true })
//     })
//     .then(() => {
//       return { message: `Success! ${email} is now an admin.` }
//     })
//     .catch((error) => {
//       throw new functions.https.HttpsError('internal', error.message)
//     })
// })

const { onRequest } = require('firebase-functions/v2/https')
// const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

admin.initializeApp()

// exports.countBooks = onRequest((req, res) => {
//   cors(req, res, async () => {
//     try {
//       const booksCollection = admin.firestore().collection('books')
//       const snapshot = await booksCollection.get()
//       const count = snapshot.size

//       res.status(200).send({ count })
//     } catch (error) {
//       console.error('Error counting books:', error.message)
//       res.status(500).send('Error counting books')
//     }
//   })
// })

// exports.capitalizeBookName = onDocumentCreated('/books/{bookId}', async (event) => {
//   const bookData = event.data.data()

//   if (bookData.name) {
//     const capitalizedBookName = bookData.name.toUpperCase()

//     await event.data.ref.update({
//       name: capitalizedBookName,
//     })
//   }
// })

// exports.getAllBooks = onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     try {
//       const booksCollection = admin.firestore().collection('books')
//       const snapshot = await booksCollection.get()
//       const books = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         isbn: doc.data().isbn,
//         name: doc.data().name,
//       }))

//       res.status(200).json(books)
//     } catch (error) {
//       console.error('Error fetching books:', error.message)
//       res.status(500).send('Error fetching books')
//     }
//   })
// })

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

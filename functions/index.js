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

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.addAdminRole = functions.https.onCall((data, context) => {
  // Check if the user is authenticated by verifying the ID token
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Request not authenticated')
  }

  // Get the user ID from the email provided
  const email = data.email
  const idToken = data.idToken

  // Verify the ID token is valid
  return admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      // Check if the requesting user has admin privileges
      if (!decodedToken.admin) {
        throw new functions.https.HttpsError(
          'permission-denied',
          'You do not have permission to make this change.',
        )
      }

      // Get user record from email
      return admin.auth().getUserByEmail(email)
    })
    .then((userRecord) => {
      // Set the custom claim for the user
      return admin.auth().setCustomUserClaims(userRecord.uid, { admin: true })
    })
    .then(() => {
      return { message: `Success! ${email} is now an admin.` }
    })
    .catch((error) => {
      throw new functions.https.HttpsError('internal', error.message)
    })
})

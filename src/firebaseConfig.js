// src/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCRfSzTQNJIJzzTh0d_6ohOglfX4gkCArI',
  authDomain: 'disability-connect-australia.firebaseapp.com',
  projectId: 'disability-connect-australia',
  storageBucket: 'disability-connect-australia.appspot.com',
  messagingSenderId: '1090916556007',
  appId: '1:1090916556007:web:33080dd499509c133d9642',
}

// Avoid initializing more than once
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

const db = getFirestore(firebaseApp)
const functions = getFunctions(firebaseApp)
const auth = getAuth(firebaseApp)

export { firebaseApp, db, functions, auth }

import firebase from 'firebase'
import { toast } from 'react-toastify'
import { pathes } from '../utils/pathes'

let firebaseConfig = {
  apiKey: process.env.REACT_APP_WEB_API_KEY,
  authDomain: 'store-c430f.firebaseapp.com',
  databaseURL: 'https://store-c430f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'store-c430f',
  storageBucket: 'store-c430f.appspot.com',
  messagingSenderId: '315502274086',
  appId: '1:315502274086:web:f720a663c7921f5d81a8e7',
  measurementId: 'G-SFR8X80VEE',
}

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = app.firestore()
auth.languageCode = 'en'
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider)
    if (res) {
      toast.success('You was successfully Login!', {
        theme: 'colored',
      })
    }
    return res
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const signInWithFacebook = async () => {
  try {
    const res = await auth.signInWithPopup(facebookProvider)
    return res
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password)
    if (res) {
      toast.success('You was successfully Login!', {
        theme: 'colored',
      })
    }
    return res
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    if (res) {
      toast.success('You was successfully registered. Login please!', {
        theme: 'colored',
      })
    }
    const user = res.user
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const sendPasswordResetEmail = async (email, history) => {
  try {
    const res = await auth.sendPasswordResetEmail(email)
    toast('Password reset link sent! Check your email!', {
      theme: 'colored',
    })
    if (res) {
      history.push(pathes.home)
    }
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}

const logout = () => {
  auth.signOut()
  toast.success('signOut success!', {
    theme: 'colored',
  })
}

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  signInWithFacebook,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
}

import firebase from 'firebase'
import { toast } from 'react-toastify'
import { pathes } from '../../../utils/pathes'

let configKorySergey = {
  apiKey: process.env.REACT_APP_WEB_API_KEY,
  authDomain: "online-market-8bacd.firebaseapp.com",
  databaseURL: "https://online-market-8bacd-default-rtdb.firebaseio.com",
  projectId: "online-market-8bacd",
  storageBucket: "online-market-8bacd.appspot.com",
  messagingSenderId: "207751928645",
  appId: "1:207751928645:web:96aa8b2226e314976e7c2c",
  measurementId: "G-M46CWDZ01V"
}

const app = firebase.initializeApp(configKorySergey)
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

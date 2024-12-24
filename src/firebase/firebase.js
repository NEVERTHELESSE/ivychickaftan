import {initializeApp} from 'firebase/app'

import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { firebaseConfig } from './FirebaseConfig'
import {getStorage} from 'firebase/storage'


 const app = initializeApp(firebaseConfig)
 const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result.user)
    // window.location.replace('/')
    localStorage.setItem('email',result.user.email)
    localStorage.setItem('username',result.user.displayName)
    localStorage.setItem('profileUrl',result.user.photoURL)
  }).catch(e=>{
    console.log(e)
  })
}


export {app,auth}
export const imageDb = getStorage(app)
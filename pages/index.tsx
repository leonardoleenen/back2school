import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { authService } from '../services/auth.service'
import firebase from 'firebase/app'
import { firebaseManager } from '../services/firebase.service'
import { UISignUpStore } from '../stores/signup.store'

const IndexPage = (): JSX.Element => {
  const router = useRouter()
  const { token } = router.query
  const [loading, setLoading] = useState(false)

  const doLoginWithGoogle = () => {
    setLoading(true)
    const provider = new firebase.auth.GoogleAuthProvider()
    firebaseManager
      .getFirebaseApp()
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential as firebase.auth.OAuthCredential

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user

        UISignUpStore.update(s => {
          s.user = {
            avatar: user.photoURL,
            id: user.uid,
            name: user.displayName
          }
        })
        router.push('/signup/welcome')

        // ...
      })
      .catch(error => {
        setLoading(false)
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
        // ...
      })
  }

  useEffect(() => {
    if (token && authService.verifyToken(token as string)) {
      authService.stablishSession(token as string)
      router.push('/home')
    } else {
      if (
        authService.getToken() &&
        authService.verifyToken(authService.getToken())
      )
        router.push('/home')
    }
  }, [token])

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div>Wait please</div>
      </div>
    )

  return (
    <div>
      <section className="bg-indigo-900 pt-10 pb-6 rounded-b-xl shadow-xl flex justify-center">
        <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-48" />
      </section>
      <section className="px-4 py-8">
        <p className="text-lg font-semibold text-center mb-4 text-gray-800">
          Ingresá con tu red social
        </p>
        <button
          onClick={doLoginWithGoogle}
          className="rounded-lg bg-red-100 w-full border border-red-500 p-2 flex justify-center items-center"
        >
          <span className="mr-3 text-sm text-gray-900">
            Ingresar con Google
          </span>
          <img src="/google-icon.png" alt="Google" />
        </button>
      </section>
    </div>
  )
}

export default IndexPage

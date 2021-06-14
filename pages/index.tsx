import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { authService } from '../services/auth.service'

const IndexPage = (): JSX.Element => {
  const router = useRouter()
  const { token } = router.query

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

  return (
    <div>
      <section className="bg-indigo-900 pt-10 pb-6 rounded-b-xl shadow-xl flex justify-center">
        <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-48" />
      </section>
      <section className="px-4 py-8">
        <p className="text-lg font-semibold text-center mb-4 text-gray-800">Ingresá con tu red social</p>
        <button className="rounded-lg bg-red-100 w-full border border-red-500 p-2 flex justify-center items-center">
          <span className="mr-3 text-sm text-gray-900">Ingresar con Google</span>
          <img src="/google-icon.png" alt="Google" />
        </button>
      </section>
    </div>
  )
}

export default IndexPage

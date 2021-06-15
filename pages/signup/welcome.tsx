import React, { useEffect } from 'react'
import { UISignUpStore } from '../../stores/signup.store'
import { useRouter } from 'next/router'

const WelcomePage = (): JSX.Element => {
  const user = UISignUpStore.useState(s => s.user)
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/')
  }, [])

  if (!user) return <div>Redirect...</div>
  return (
    <div>
      <section className="bg-indigo-900 pt-10 pb-6 rounded-b-xl shadow-xl flex justify-center">
        <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-48" />
      </section>
      <section className="px-4 py-8">
        <div className="flex justify-center">
          <img
            src={user.avatar}
            alt="Foto de perfil"
            className="block h-18 w-16 rounded-full m-auto shadow-base"
          />
        </div>
        <p className="text-lg font-semibold text-center mt-4 mb-1 text-gray-800">
          {`Te damos la bienvenida, ${user.name}`}
        </p>
        <div className="flex justify-center items-center mb-8">
          <span className="mr-2">Te conectaste con Google</span>
          <img src="/google-icon.png" alt="Google Icon" />
        </div>
        <button
          onClick={() => router.push('/signup/alumnis')}
          className="w-full rounded-lg bg-red-500 shadow-base p-2 text-white text-sm mb-3"
        >
          Continuar
        </button>
        <a
          href=""
          className="text-center block text-sm font-semibold text-gray-600"
        >
          Cerrar sesión
        </a>
      </section>
    </div>
  )
}

export default WelcomePage

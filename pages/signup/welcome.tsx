import React from 'react'

const WelcomePage = (): JSX.Element => {
  return <div>
  <section className="bg-indigo-900 pt-10 pb-6 rounded-b-xl shadow-xl flex justify-center">
    <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-48" />
  </section>
  <section className="px-4 py-8">
    <img src="/avatar.png" alt="Foto de perfil" className="block rounded full m-auto shadow-base" />
    <p className="text-lg font-semibold text-center mt-4 mb-1 text-gray-800">Te damos la bienvenida, Mariano</p>
    <div className="flex justify-center items-center mb-8">
        <span className="mr-2">Te conectaste con Google</span>
        <img src="/google-icon.png" alt="Google Icon" />
    </div>
    <button className="w-full rounded-lg bg-red-500 shadow-base p-2 text-white text-sm mb-3">Continuar</button>
    <a href="" className="text-center block text-sm font-semibold text-gray-600">Cerrar sesión</a>
  </section>
</div>
}

export default WelcomePage

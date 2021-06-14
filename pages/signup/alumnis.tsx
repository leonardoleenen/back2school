import React from 'react'

const AlumnisPage = (): JSX.Element => {
    return <div>
    <section className="bg-indigo-900 pt-6 pb-4 rounded-b-xl shadow-xl flex justify-center">
      <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-32" />
    </section>
    <section className="px-4 py-8">
      <p className="text-lg font-semibold text-center mb-3 text-gray-800">Creá un perfil de alumno para cada hijo</p>
      <button className="flex justify-between items-center mb-12 rounded-lg border border-gray-400 py-2 px-4 w-full">
          <span className="mr-2">Agregar alumno</span>
          <img src="/md-plus-circle.png" alt="Icon plus" />
      </button>
    </section>
  </div>
}

export default AlumnisPage

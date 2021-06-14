import React from 'react'

const AlumnisPage = (): JSX.Element => {
    return <div>
    <section className="bg-indigo-900 pt-6 pb-4 rounded-b-xl shadow-xl flex justify-center">
      <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-32" />
    </section>
    <section className="px-4 py-8">
      <p className="text-lg font-semibold text-center mb-3 text-gray-800">Creá un perfil de alumno para cada hijo</p>
      <article className="bg-gray-200 border border-gray-300 rounded-lg shadow-md text-center mb-4 p-4 mt-12">
        <img className="m-auto w-16 -mt-12 rounded-full block shadow-base" src="/avatar.png" alt="Avatar alumni" />
        <button className="flex items-center justify-center mt-3 mb-2 m-auto border border-gray-300 rounded-full px-3 py-1">
          <p className="text-sm m-0 font-semibold mr-1">Benjamin Leenen</p>
          <img src="/edit-icon.png" alt="Edit" />
        </button>
        <div className="flex items-center justify-center">
          <span className="px-2 text-gray-400">Secundario</span>
          <span className="px-2 text-gray-400">KS 1</span>
        </div>
        <button className="text-sm font-semibold w-full bg-indigo-500 rounded-lg p-2 text-white mt-4">Informar ausentismo</button>
      </article>
      <button className="flex justify-between items-center mb-12 rounded-lg border border-gray-400 py-2 px-4 w-full">
          <span className="mr-2">Agregar alumno</span>
          <img src="/md-plus-circle.png" alt="Icon plus" />
      </button>
      <button className="w-full rounded-lg bg-red-500 shadow-base p-2 text-white text-sm mb-3">Finalizar</button>
      <a href="" className="text-center block text-sm font-semibold text-gray-600">Cerrar sesión</a>
    </section>
  </div>
}

export default AlumnisPage

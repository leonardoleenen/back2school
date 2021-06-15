import React, { useState } from 'react'
import { UISignUpStore } from '../../stores/signup.store'
import { useRouter } from 'next/router'
import { firebaseManager } from '../../services/firebase.service'
const AlumnisPage = (): JSX.Element => {
  const alumnis = UISignUpStore.useState(s => s.alumnis)
  const user: User = UISignUpStore.useState(s => s.user)
  const [isSaving, setIsSaving] = useState(false)

  const router = useRouter()

  const remove = (alumni: Alumni) => {
    UISignUpStore.update(s => {
      s.alumnis = alumnis.filter(a => a.id !== alumni.id)
    })
  }
  const save = () => {
    setIsSaving(true)
    firebaseManager.createUserAndFamily(user, alumnis).then(result => {
      console.log(result)
      router.push('/home')
    })
  }

  if (isSaving)
    return (
      <div className="h-screen flex items-center justify-center">
        <div>Wait please</div>
      </div>
    )

  return (
    <div>
      <section className="bg-indigo-900 pt-6 pb-4 rounded-b-xl shadow-xl flex justify-center">
        <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-32" />
      </section>
      <section className="px-4 py-8">
        <p className="text-lg font-semibold text-center mb-3 text-gray-800">
          Creá un perfil de alumno para cada hijo
        </p>
        {alumnis.map(a => (
          <article
            key="2"
            className="bg-gray-200 border border-gray-300 rounded-lg shadow-md text-center mb-4 p-4 mt-12"
          >
            <div
              className={`flex items-center justify-center m-auto h-16 w-16 -mt-12 rounded-full block shadow-base ${
                a.genre === 'M' ? 'bg-green-500' : 'bg-red-300'
              }`}
            >
              <div className="text-white text-2xl">
                {a.firstName.split(' ').map(n => n[0].toUpperCase())}
              </div>
            </div>
            <button className="flex items-center justify-center mt-3 mb-2 m-auto border border-gray-00 rounded-full px-3 py-1">
              <p className="text-sm m-0 font-semibold mr-1">{`${a.firstName} ${a.lastName}`}</p>
              <img src="/edit-icon.png" alt="Edit" />
            </button>
            <div className="flex items-center justify-center">
              <span className="px-2 text-gray-400">Secundario</span>
              <span className="px-2 text-gray-400">KS 1</span>
            </div>
            <button
              onClick={() => remove(a)}
              className="text-sm font-semibold w-full bg-red-500 rounded-lg p-2 text-white mt-4"
            >
              Borrar
            </button>
          </article>
        ))}

        <button
          onClick={() => router.push('/signup/new_alumni')}
          className="flex justify-between items-center mb-12 rounded-lg border border-gray-400 py-2 px-4 w-full"
        >
          <span className="mr-2">Agregar alumno</span>
          <img src="/md-plus-circle.png" alt="Icon plus" />
        </button>
        <button
          onClick={save}
          className="w-full rounded-lg bg-red-500 shadow-base p-2 text-white text-sm mb-3"
        >
          Finalizar
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

export default AlumnisPage

/* Example
<article
            key="2"
            className="bg-gray-200 border border-gray-300 rounded-lg shadow-md text-center mb-4 p-4 mt-12"
          >
            <img
              className="m-auto w-16 -mt-12 rounded-full block shadow-base"
              src="/avatar.png"
              alt="Avatar alumni"
            />
            <button className="flex items-center justify-center mt-3 mb-2 m-auto border border-gray-300 rounded-full px-3 py-1">
              <p className="text-sm m-0 font-semibold mr-1">Benjamin Leenen</p>
              <img src="/edit-icon.png" alt="Edit" />
            </button>
            <div className="flex items-center justify-center">
              <span className="px-2 text-gray-400">Secundario</span>
              <span className="px-2 text-gray-400">KS 1</span>
            </div>
            <button className="text-sm font-semibold w-full bg-indigo-500 rounded-lg p-2 text-white mt-4">
              Informar ausentismo
            </button>
          </article>
*/

import { Avatar } from 'antd'
import React from 'react'
import { useRouter } from 'next/router'
import { UIAbsenteStore } from '../../../stores/absente.store'

interface CardProps {
  alumni: Alumni
}

export const Card = (props: CardProps): JSX.Element => {
  const almuni: Alumni = props.alumni

  const router = useRouter()

  const selectAlumni = (obj: Alumni) => {
    UIAbsenteStore.update(s => {
      s.almuniSelected = obj
    })
    router.push('/declare_absente')
  }

  return (
    <div key={props.alumni.id}>
      <article className="bg-gray-200 border border-gray-300 rounded-lg shadow-md text-center mb-4 p-4 mt-12">
        <div
          className={`flex items-center justify-center m-auto h-16 w-16 -mt-12 rounded-full block shadow-base ${
            almuni.genre === 'M' ? 'bg-green-500' : 'bg-red-300'
          }`}
        >
          <div className="text-white text-2xl">
            {almuni.firstName.split(' ').map(n => n[0].toUpperCase())}
          </div>
        </div>
        <button className="flex items-center justify-center mt-3 mb-2 m-auto border border-gray-300 rounded-full px-3 py-1">
          <p className="text-sm m-0 font-semibold mr-1">{`${almuni.firstName} ${almuni.lastName}`}</p>
          <img src="/edit-icon.png" alt="Edit" />
        </button>
        <div className="flex items-center justify-center">
          <span className="px-2 text-gray-400">Secundario</span>
          <span className="px-2 text-gray-400">ES1</span>
        </div>
        <button
          onClick={() => selectAlumni(almuni)}
          className="text-sm font-semibold w-full bg-indigo-500 rounded-lg p-2 text-white mt-4"
        >
          Informar ausentismo
        </button>
      </article>
    </div>
  )
}

/*
<div key={props.alumni.id}>
      <article className="bg-gray-200 border border-gray-300 rounded-lg shadow-md text-center mb-4 p-4 mt-12">
        <img
          src={almuni.photo}
          className="m-auto w-16 h-16 -mt-12 rounded-full block shadow-base"
        />
        <button className="flex items-center justify-center mt-3 mb-2 m-auto border border-gray-300 rounded-full px-3 py-1">
          <p className="text-sm m-0 font-semibold mr-1">{almuni.firstName}</p>
          <img src="/edit-icon.png" alt="Edit" />
        </button>
        <div className="flex items-center justify-center">
          <span className="px-2 text-gray-400">Secundario</span>
          <span className="px-2 text-gray-400">KS 1</span>
        </div>
        <button
          onClick={() => selectAlumni(almuni)}
          className="text-sm font-semibold w-full bg-indigo-500 rounded-lg p-2 text-white mt-4"
        >
          Informar ausentismo
        </button>
        <button className="text-sm font-semibold w-full bg-indigo-200 rounded-lg p-2 text-indigo-500 mt-4">
          Ausentismo ya informado
        </button>
      </article>
    </div> */

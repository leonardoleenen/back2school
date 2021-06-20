import React, { useEffect, useRef } from 'react'
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
import { authService } from '../services/auth.service'
import { UIAbsenteStore } from '../stores/absente.store'
import { useRouter } from 'next/router'

export const DeclareAbsence = (): JSX.Element => {
  const container = useRef()
  const router = useRouter()
  const almuni: Alumni = UIAbsenteStore.useState(s => s.almuniSelected)

  console.log(btoa(JSON.stringify(almuni)))
  useEffect(() => {
    createWidget('PMr8Wvb1', {
      container: container.current,
      hidden: {
        token: authService.getToken(),
        almuni: btoa(JSON.stringify(almuni))
      }
    })
  }, [])
  return (
    <div className="">
      <div className="flex p-4 pt-8 items-center">
        <div
          onClick={() => router.push('/home')}
          className="flex items-center pr-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div>Volver al menú principal</div>
      </div>
      <div>
        <div className=" h-screen" ref={container}></div>
      </div>
    </div>
  )
}

export default DeclareAbsence

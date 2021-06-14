import React, { useEffect, useRef } from 'react'
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
import { authService } from '../services/auth.service'
import { UIAbsenteStore } from '../stores/absente.store'

export const DeclareAbsence = (): JSX.Element => {
  const container = useRef()
  const almuni: Alumni = UIAbsenteStore.useState(s => s.almuniSelected)

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
    <div>
      <div className="h-24 bg-blue-400">Header</div>
      <div>
        <div className="h-screen" ref={container}></div>
      </div>
    </div>
  )
}

export default DeclareAbsence

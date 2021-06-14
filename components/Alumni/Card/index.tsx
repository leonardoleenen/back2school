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
      <div>
        <Avatar src={almuni.photo} />
      </div>
      <div>{almuni.firstName}</div>
      <div onClick={() => selectAlumni(almuni)}>Informar Ausentismo</div>
    </div>
  )
}

import { Avatar } from 'antd'
import React from 'react'
import { useRouter } from 'next/router'

interface CardProps {
  alumni: Alumni
}

export const Card = (props: CardProps): JSX.Element => {
  const almuni: Alumni = props.alumni

  const router = useRouter()

  return (
    <div key={props.alumni.id}>
      <div>
        <Avatar src={almuni.photo} />
      </div>
      <div>{almuni.firstName}</div>
      <div onClick={() => router.push('/declare_absente')}>
        Informar Ausentismo
      </div>
    </div>
  )
}

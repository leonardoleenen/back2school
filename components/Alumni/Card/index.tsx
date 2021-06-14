import { Avatar } from 'antd'
import React from 'react'

interface CardProps {
  alumni: Alumni
}

export const Card = (props: CardProps): JSX.Element => {
  const almuni: Alumni = props.alumni

  return (
    <div key={props.alumni.id}>
      <div>
        <Avatar src={almuni.photo} />
      </div>
      <div>{almuni.firstName}</div>
      <div>Informar Ausentismo</div>
    </div>
  )
}

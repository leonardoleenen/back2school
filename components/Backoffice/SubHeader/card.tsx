import React from 'react'

interface Props {
  title: string
  subTitle: string
  description: string
  isImportant: boolean
}
const Card = (props: Props): JSX.Element => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.subTitle}</div>
      <div>{props.description}</div>
    </div>
  )
}

export default Card

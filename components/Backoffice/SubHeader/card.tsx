import React from 'react'

interface Props {
  title: string
  subTitle: string
  description: string
  isImportant: boolean
}
const Card = (props: Props): JSX.Element => {
  return (
    <div
      style={{ minWidth: '180px' }}
      className={`${
        props.isImportant
          ? 'bg-blue-500  text-white '
          : 'bg-gray-100 text-gray-700'
      } rounded-lg px-8 py-4 opacity-90`}
    >
      <div className="text-xl font-semibold">{props.title}</div>
      <div className="font-thin text-xs">{props.subTitle}</div>
      <div className="font-regular ">{props.description}</div>
    </div>
  )
}

export default Card

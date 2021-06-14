import { Button } from 'antd'
import React from 'react'

const Content = (props): JSX.Element => {
  return (
    <div className="px-4 py-2">
      <div>{props.children}</div>
    </div>
  )
}

export default Content

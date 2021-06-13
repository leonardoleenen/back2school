import { Button } from 'antd'
import React from 'react'

const Content = (props): JSX.Element => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  )
}

export default Content

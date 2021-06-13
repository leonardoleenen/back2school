import { Button } from 'antd'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Page = (props): JSX.Element => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  )
}

export default Page

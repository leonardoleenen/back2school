import { Button } from 'antd'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Page = (props): JSX.Element => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border sm:p-4 rounded-lg h-screen">
                {props.children}
            </div>
        </div>
    )
}

export default Page

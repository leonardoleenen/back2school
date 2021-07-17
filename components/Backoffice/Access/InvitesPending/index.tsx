import React from 'react'

interface Props {
    className?: string
}

export default (props: Props): JSX.Element => {
    return (
        <div className={props.className}>
            <h2>Pending Invites</h2>
            <h3>You have 4 pending invites</h3>
        </div>
    )
}

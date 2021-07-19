import React, { useEffect, useState } from 'react'
import { inviteService } from '../services/invites.service'
import { useRouter } from 'next/router'
import { UISignUpStore } from '../stores/signup.store'

import { Result } from 'antd'

export default (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query
    const [forbidden, setForbidden] = useState(false)

    useEffect(() => {
        inviteService.getInvite(id).then(invite => {
            if (!invite) {
                setForbidden(true)
                return
            }
            UISignUpStore.update(s => {
                s.invite = invite
            })
            router.push('/')
        })
    }, [id])

    if (forbidden)
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Result
                    status="403"
                    title="Forbidden"
                    subTitle="Sorry, you are not authorized to access this page."
                />
            </div>
        )
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div>Please, wait...</div>
        </div>
    )
}

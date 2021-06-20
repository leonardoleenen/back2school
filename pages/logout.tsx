import React, { useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import { authService } from '../services/auth.service'

const IndexPage = (): JSX.Element => {
    const router = useRouter()

    useEffect(() => {
        authService.doLogout()
        router.push('/')
    }, [])
    return <div className="h-screen flex items-center justify-center">
        <div>Wait please...</div>
    </div>
}

export default IndexPage
import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { authService } from '../services/auth.service'

const IndexPage = (): JSX.Element => {
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    if (token && authService.verifyToken(token as string)) {
      authService.stablishSession(token as string)
      router.push('/home')
    }
  }, [token])

  return (
    <div>
      <Button type="primary">Go to Home</Button>
    </div>
  )
}

export default IndexPage

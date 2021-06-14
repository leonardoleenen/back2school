import React, { useState, useEffect } from 'react'

import { authService } from '../../services/auth.service'

const Header = (): JSX.Element => {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    setUser(authService.getUserData())
  }, [])

  if (!user) return <></>

  return (
    <div>
      <div>{`Welcome ${user.name}`}</div>
    </div>
  )
}

export default Header

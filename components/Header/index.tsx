import React, { useState, useEffect } from 'react'

import { authService } from '../../services/auth.service'

const Header = (): JSX.Element => {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    setUser(authService.getUserData())
  }, [])

  if (!user) return <></>

  return (
    <div className="bg-indigo-900 pt-16 px-4 pb-8 rounded-b-xl shadow-xl flex justify-center">
      <div className="text-xl font-bold text-white">{`Welcome ${user.name}`}</div>
    </div>
  )
}

export default Header

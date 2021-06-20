import { Dropdown, Menu, Space } from 'antd'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { authService } from '../../services/auth.service'

const Header = (): JSX.Element => {
  const [user, setUser] = useState<User>(null)
  const router = useRouter()
  useEffect(() => {
    setUser(authService.getUserData())
  }, [])

  const logout = () => {
    authService.doLogout()
    router.push('/')
  }

  if (!user) return <></>


  const menu = (
    <Menu>
      {/*<Menu.Item key="1">
        <Space>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <div>Agregar alumno</div>
        </Space>
  </Menu.Item>*/}
      <Menu.Divider />
      <Menu.Item key="3">
        <div className="flex">
          <Space>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <div onClick={logout}>Cerrar sesión</div>
          </Space>

        </div>
      </Menu.Item>
    </Menu>
  );

  const MenuComponent = () => {
    return <Dropdown overlay={menu} trigger={['click']}>
      <div className="pt-4 flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="#fff" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </Dropdown>
  }
  return (
    <div className="bg-indigo-900 px-4 pb-8 rounded-b-xl shadow-xl ">
      <MenuComponent />
      <div className="text-xl font-bold text-white pt-8">{`Welcome ${user.name}`}</div>
    </div>
  )
}

export default Header

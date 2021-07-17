import { Avatar, Badge, Space } from 'antd'
import React from 'react'
import styles from './header.module.css'
import { useRouter } from 'next/router'
import { UIHeaderStore } from '../../../stores/header.store'

const Header = (): JSX.Element => {
  const selectedTab = UIHeaderStore.useState(s => s.selectedTab)

  const router = useRouter()

  const DashBoard = ({ selected }) => {
    return (
      <div
        onClick={() => router.push('/backoffice/dashboard')}
        className={`flex ml-8 items-center  cursor-pointer ${
          selected ? 'text-blue-500 font-semibold' : 'text-gray-600'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={selected ? 2 : 1}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <div className="ml-2">Dashboard</div>
      </div>
    )
  }

  const Access = ({ selected }) => {
    return (
      <div
        onClick={() => router.push('/backoffice/access')}
        className={`flex ml-8 items-center cursor-pointer ${
          selected ? 'text-blue-500 font-semibold' : 'text-gray-500'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
        <div className="ml-2">Access / Invites</div>
      </div>
    )
  }

  return (
    <div className={styles.backofficeHeader}>
      <div className="flex">
        <div>
          <div className={styles.logo}>Back 2 School</div>
        </div>
        <Space size="large">
          <DashBoard selected={selectedTab === 'DASHBOARD'} />
          <Access selected={selectedTab === 'ACCESS'} />
        </Space>
      </div>

      <div className="flex px-8 ">
        <Space size="large" className=" flex items-center">
          <div>
            <Badge count={5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Badge>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Space>
      </div>
    </div>
  )
}

export default Header

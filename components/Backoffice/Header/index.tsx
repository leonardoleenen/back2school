import React from 'react'
import styles from './header.module.css'

const DashBoard = ({ selected }) => {
  return (
    <div
      className={`flex ml-8 items-center ${
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
const Header = (): JSX.Element => {
  return (
    <div className={styles.backofficeHeader}>
      <div>
        <div className={styles.logo}>Back 2 School</div>
      </div>
      <DashBoard selected={true} />
    </div>
  )
}

export default Header

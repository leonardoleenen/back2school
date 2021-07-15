import React from 'react'
import styles from './subheader.module.scss'

interface Props {
  className?: string
  title: string
  subTitle: string
  cards: Array<JSX.Element>
}

const SubHeader = (props: Props): JSX.Element => {
  return (
    <div className={props.className}>
      <div className={`${styles.subheader}`}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subTitle}>{props.subTitle}</div>
      </div>
    </div>
  )
}

export default SubHeader

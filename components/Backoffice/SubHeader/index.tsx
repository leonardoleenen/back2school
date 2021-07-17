import React from 'react'
import styles from './subheader.module.scss'

interface Props {
  className?: string
  title: string
  subTitle: string
  cards: Array<JSX.Element>
  cardCols?: number
}

const SubHeader = (props: Props): JSX.Element => {
  const { cardCols } = props
  return (
    <div className={`flex justify-between ${props.className}`}>
      <section>
        <div className={`${styles.subheader}`}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.subTitle}>{props.subTitle}</div>
        </div>
      </section>
      <section
        className={`grid  gap-4 ${
          cardCols ? 'grid-cols-' + cardCols.toString() : 'grid-cols-2'
        }`}
      >
        {props.cards.map(card => card)}
      </section>
    </div>
  )
}

export default SubHeader

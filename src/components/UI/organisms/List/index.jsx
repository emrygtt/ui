import React from 'react'
import ItemCard from '../../molecules/ItemCard'
import styles from './list.module.scss'
const List = ({
  category,
  loading
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.root__list}>
        {category && category?.entries?.map((api, index) => (
          <ItemCard
            item={api}
          />
        ))}
      </div>
    </div>
  )
}

export default List
import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './itemcard.module.scss'

const ItemCard = ({
  item
}) => {

  const navigate = useNavigate()

  const renderItem = (text, field) => {
    return (
      <p>
        <span className={styles.title}>{text}:</span>
        <span className={styles.value}>{item?.[field] || "-"}</span>
      </p>
    )
  }

  return (
    <div className={styles.root}>
      <Link
        to={`/details/${item?.API}`}
      >
        <div className={styles.root__content}>
          {renderItem('Title', "API")}
          {renderItem('Description', "Description")}
          {renderItem('Category', "Category")}
        </div>
      </Link>
    </div>
  )
}

export default ItemCard
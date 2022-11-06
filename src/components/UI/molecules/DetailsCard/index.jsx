import React from 'react'
import Loader from '../../atoms/Loader'
import styles from './detailscard.module.scss'
const DetailsCard = ({
  item
}) => {

  const renderRow = (text, field) => {

    if (field === 'Link') {
      return (
        <p>
          <span className={styles.title}>{text}:</span>
          <a href={item?.[field]} target='_blank' className={styles.value} >{item?.[field] ? `Visit ${item?.["API"]} Site !` : "-"}</a>
        </p>
      )
    }
    return (
      <p>
        <span className={styles.title}>{text}:</span>
        {field === "HTTPS" ?
          (
            <span className={styles.value}>{item?.[field] ? "Yes" : "No"}</span>
          )
          :
          (
            <span className={styles.value}>{item?.[field] || "-"}</span>
          )
        }
      </p>
    )
  }

  return (
    <div className={styles.root}>
      {item ?
        (
          <>
            {Object.keys(item)?.map((key) => (
              <>
                {renderRow(key, key)}
              </>
            ))}
          </>
        )
        :
        (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Loader />
          </div>
        )
      }
    </div>
  )
}

export default DetailsCard
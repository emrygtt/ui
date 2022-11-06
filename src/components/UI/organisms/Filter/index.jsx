import React, { useState } from 'react'
import { useEffect } from 'react';
import { useAppContext } from '../../../contexts/AppContext';
import useFetch from '../../../hooks/useFetch'
import styles from './filter.module.scss'
const Filter = () => {



  const { searchCategory, setSearchCategory, categories, categoriesLoading
  } = useAppContext()

  const handleClick = (c) => {
    setSearchCategory(c);
  }
  if (categoriesLoading) {
    return (
      <div className={styles.loading}>
        {[...Array(35).keys()].map((num) => (
          <div
            key={num}
            className={styles.loading__item}
          >

          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.root}>
      {categories && categories?.map((category, index) => (
        <button
          className={styles.root__button}
          key={`Item${index}`}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Filter
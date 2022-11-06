import React, { useState } from 'react'
import { useAppContext } from '../../../contexts/AppContext';
import styles from './search.module.scss'
const Search = () => {

  const [value, setValue] = useState();
  const { setSearchText, searchText } = useAppContext()

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setSearchText(value)
      setValue("")
    }
  }
  const handleSearchClick = () => {
    setSearchText(value)
    setValue("")
  }


  return (
    <div className={styles.root}>
      <input
        type='text'
        className={styles.root__input}
        placeholder='Search Here...'
        value={value}
        onChange={(e) => setValue(e?.target?.value)}
        onKeyDown={handleEnter}
      />
      <button
        className={styles.root__button}
        onClick={handleSearchClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.root__button__icon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
  )
}

export default Search
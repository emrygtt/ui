import React from 'react'
import { useAppContext } from '../contexts/AppContext'
import Search from '../UI/atoms/Search'
import Loader from '../UI/atoms/Loader'
import Filter from '../UI/organisms/Filter'
import List from '../UI/organisms/List'

const ListView = () => {

  const { selectedCategory, selectedCategoryLoading } = useAppContext();

  return (
    <div>
      <Search />
      <Filter />
      {selectedCategoryLoading ?
        (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Loader />
          </div>
        )
        :
        (
          <List category={selectedCategory} loading={selectedCategoryLoading} />
        )
      }

    </div>
  )
}

export default ListView
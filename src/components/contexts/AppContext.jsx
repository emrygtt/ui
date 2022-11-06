import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';


const AppContext = React.createContext({});


export const AppContextProvider = ({ children }) => {
  const [searchTitle, setSearchTitle] = useState(null)
  const [searchText, setSearchText] = useState(null)
  const [searchCategory, setSearchCategory] = useState(null)

  const { fetchData: fetchSelectedCategory, response: selectedCategory, loading: selectedCategoryLoading } = useFetch("entries");

  const { fetchData: fetchSelectedItem, response: selectedItem, loading: selectedItemLoading } = useFetch("entries");

  const { fetchData: fetchCategories, response: { categories }, loading: categoriesLoading } = useFetch('categories');

  useEffect(() => {
    fetchSelectedCategory()
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    if (searchCategory)
      fetchSelectedCategory({ params: { category: searchCategory } })
  }, [searchCategory])

  useEffect(() => {
    fetchSelectedCategory({ params: { title: searchText } })
  }, [searchText])

  useEffect(() => {
    if (searchTitle) {
      fetchSelectedItem({ params: { title: searchTitle } })
    }
  }, [searchTitle])

  return (
    <AppContext.Provider value={{
      selectedCategory,
      selectedCategoryLoading,
      searchTitle,
      setSearchTitle,
      selectedItem,
      searchText,
      setSearchText,
      searchCategory,
      setSearchCategory,
      categories,
      categoriesLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext';
import DetailsCard from '../UI/molecules/DetailsCard';


const DetailsView = () => {

  const { title } = useParams();
  const { searchTitle, setSearchTitle, selectedItem } = useAppContext()


  useEffect(() => {
    if (title) {
      setSearchTitle(title)
    }
  }, [title])



  return (
    <DetailsCard item={selectedItem.entries?.[0]} />
  )
}

export default DetailsView
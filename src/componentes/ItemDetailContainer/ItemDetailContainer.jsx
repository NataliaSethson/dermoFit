import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent'

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, "catálogo", itemId)
    getDoc(docRef)
      .then((doc) => {
        setItem({
          ...doc.data(),
          id: doc.id
        })

      })

      .finally(() => setLoading(false))

  }, [])


  return (
    <div>
      {
        loading
          ? <SpinnerComponent />
          : <ItemDetail item={item} />

      }
    </div>
  )
}

export default ItemDetailContainer
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"




const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const productosRef = collection(db, "catálogo")
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef


    getDocs(q)
      .then((resp) => {
        const docs = resp.docs.map((doc) => {

          return { ...doc.data(), id: doc.id }
        })

        setProductos(docs)


      })

      .finally(false)

  }, [categoryId])

  return (
    <div >
      
      <ItemList productos={productos} />

    </div>

  )
}

export default ItemListContainer
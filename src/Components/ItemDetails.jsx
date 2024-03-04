import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {
 const {transactionId} = useParams()
 const [transaction, setTransaction] =useState(null)


 useEffect(() => {
   fetch(`http:localhost:3448/api/budgetingApp/${transactionId}`)
   .then((res) => res.json())
   .then((data) => setTransaction(data))
   .catch(err => console.error(err))
 },[transactionId])


 if (!transactionId) {
    return <div>Loading...</div>
 }


  return (
    <div>

    </div>
  )
}

export default ItemDetails
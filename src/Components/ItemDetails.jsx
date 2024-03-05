import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ItemDetails = () => {
 const {transactionId} = useParams()
 const [transaction, setTransaction] =useState(null)
 const [updatedTransaction, setUpdatedTransaction] = useState({})


 const navigate = useNavigate()


 useEffect(() => {
   fetch(`http://localhost:3448/api/budgetingApp/${transactionId}`)
   .then((res) => res.json())
   .then((data) => {
    setTransaction(data)
   })
   .catch(err => console.error(err))
 },[transactionId])


const handleDelete = () => {
  fetch(`http://localhost:3448/api/budgetingApp/${transactionId}`, {method:'DELETE'})
  .then(res => res.json())
  .then(() => {
    navigate("/")
  })
  .catch(error => console.error('Error:', error))
}


const handleEdit = (e) => {
  e.preventDefault()
  
  fetch(`http://localhost:3448/api/budgetingApp/${transactionId}`,
   {method:'PUT',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(transaction)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`Status: ${res.status}`)
    }
    return res.json()
  })
  .then(updatedTransaction => {
    setUpdatedTransaction(updatedTransaction)
  })
  .catch(error => {
    console.error("There was a problem updating try again later.", error)
  })
}



 if (!transaction) {
    return <div>Loading...</div>
 }


  return (
    <div className='transaction-details'>
        <h3>Transaction Details</h3>
        <p>Item Name: {transaction.item_name}</p>
        <p>Amount: {transaction.amount}</p>
        <p>Date of Transaction: {transaction.date}</p>
        <p>From: {transaction.from}</p>
        <p>Category: {transaction.category}</p>
        <div>
          <button type="button" onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default ItemDetails
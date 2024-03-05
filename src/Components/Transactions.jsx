import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Transactions = () => {
const [transactionDisplay, setTransactionDisplay] = useState([])

useEffect(() => {
    fetch(`http://localhost:3448/api/budgetingApp`)
    .then((res) => {
        if (!res.ok) {
            throw console.error(`HTTP error: ${res.status}`);
        }
        return res.json()
    })
    .then((data) => {
        if (Array.isArray(data.transactions)) {
            setTransactionDisplay(data.transactions)
        } else {
            console.error("Not valid data", data.transactions)
        }
    })
    .catch((error) => {
        console.error(error)
    })
}, [])


  return (
    <div className='transactions'>
        <h3 className='transaction-header'>All Transactions:</h3>
        <table className='transaction-table'>
            <thead>
             <tr  className='transaction-tr'>
                <th className='transaction-th'>Item Name:</th>
                <th className='transaction-th'>Amount:</th>
                <th className='transaction-th'>Date of Transaction:</th>
                <th className='transaction-th'>From:</th>
                <th className='transaction-th'>Category:</th>
             </tr>
            </thead>
            <tbody>
                 {transactionDisplay.map((transaction) => (
                    <tr key={transaction.id}  className='transaction-tr'>
                     <td className='transaction-td'> <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link> </td>
                        <td className='transaction-td'>{transaction.amount}</td>
                        <td className='transaction-td'>{transaction.date}</td>
                        <td className='transaction-td'>{transaction.from}</td>
                        <td className='transaction-td'>{transaction.category}</td>
                    </tr>
                 ))}
            </tbody>
        </table>
    </div>
  )
}

export default Transactions
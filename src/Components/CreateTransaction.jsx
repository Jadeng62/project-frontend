import {useState} from 'react'

const CreateTransaction = () => {
const [newTransaction, setNewTransaction] = useState({
  "item_name": "",
  "amount": "",
  "date": "",
  "from": "",
  "category": ""
})


const handlechange = (e) => {
    setNewTransaction({...newTransaction, [e.target.id]:  e.target.value})
}

const onSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    };
    fetch(`http://localhost:3448/api/budgetingApp/`, options)
    .then((res) => res.json())
    .then((data) => setNewTransaction(data.newTransaction))
    .then(() => {
        setNewTransaction({
            "item_name": "",
            "amount": "",
            "date": "",
            "from": "",
            "category": ""
          })
    })
}



  return (
    <div className='form'>
        <h2 className='form-header'>Transaction Form</h2>
        <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='item_name'/>
            <input
            onChange={handlechange}
            value={newTransaction.item_name} 
            type="text"
            id="item_name"
            name="item_name"
            placeholder='Enter item name...'
            />
            <label htmlFor='amount'/>
            <input
            onChange={handlechange}
            value={newTransaction.amount}  
            type="number"
            id="amount"
            name="amount"
            placeholder='Enter amount...'/>
            <label htmlFor='date'/>
            <input
            onChange={handlechange}
            value={newTransaction.date}  
            type="date"
            id="date"
            name="date"/>
            <label htmlFor='from'/>
            <input
            onChange={handlechange}
            value={newTransaction.from} 
            type="text"
            id="from"
            name="from"
            placeholder='Enter sender here...'/>
            <label htmlFor='category'/>
            <input
            onChange={handlechange}
            value={newTransaction.category} 
            type='text'
            id="category"
            name="category"
            placeholder='Enter category here...'/> 
            <button className='form-btn'>
                Submit
            </button>
        </form>
        </div>
    </div>
  )
}

export default CreateTransaction
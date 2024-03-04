import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Nav = () => {
  return (
    <div className='navigation'>
      <h1 className='navigation-header'>Budgeting App</h1>
      <ul className='navigation-ul'>
       <Link to="/"><li className='navigation-li'>Transactions</li></Link>
       <Link to="/CreateTransaction"><li className='navigation-li'> Add a Transaction</li></Link>
      </ul>
    </div>
  )
}

export default Nav
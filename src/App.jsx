import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Transactions from './Components/Transactions'
import CreateTransaction from './Components/CreateTransaction'
import UpdateTransaction from './Components/UpdateTransaction'


const App = () => {
  return (
    <div>
     <Nav />
      <Routes>
        <Route path={"/"} element={<Transactions />}/>
        <Route path={"/CreateTransaction"} element={<CreateTransaction />}/>
      </Routes>
    </div>
  )
}

export default App

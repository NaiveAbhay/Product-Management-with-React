import React, { useContext } from 'react'

import { Route,Routes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/Detail'
import { ProductContext } from './utils/context'
import Category from './components/Category'
import Create from './components/Create'
import Edit from './components/Edit'


function App() {

  const products=useContext(ProductContext);
  const {data}=products;

  return (
    <div className='w-screen h-screen flex'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
          <Route path='/Detail/:idx' element={<Detail/>}/>
          <Route path='/Category/:type' element={<Category/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Edit/:idx' element={<Edit/>}/>


        
        
      </Routes>
    </div>
    
  )
}

export default App

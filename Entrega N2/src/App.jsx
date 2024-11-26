import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Structural-Elements/Header/Header'
import Main from './Structural-Elements/Main/Main'
import Aside from './Structural-Elements/Aside/Aside'

import { CartContextProvider } from './context/CartContext'

import ItemListContainer from './Structural-Elements/Aside/Content/ItemsListContainer';
import { ItemDetailContainer } from './Structural-Elements/Aside/Content/ItemDetailContainer/ItemDetailContainer'
import Cart from './Structural-Elements/Aside/Content/cart/Cart'

function App() {


  return (
    <>

      <CartContextProvider>

        <BrowserRouter>

          <Header/>

          <Routes>

            <Route path='/' element={<Aside/>}></Route>
            <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            
            <Route path='/*' element={<h1>No se que hiciste pero Rompiste Todo</h1>} />

          </Routes>

        </BrowserRouter>

      </CartContextProvider>
    </>
  )
}

export default App

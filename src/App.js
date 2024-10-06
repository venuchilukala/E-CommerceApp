import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import CartContext from './context/CartContext'

import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    setCartList(prevState => ([...prevState, product]))
   }

  const deleteCartItem = () => { }

  return (
    <BrowserRouter>
      <CartContext.Provider value={{
        cartList,
        addCartItem,
        deleteCartItem
      }}>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route exact path="/products/:id" element={<ProtectedRoute><ProductItemDetails /></ProtectedRoute>} />
          <Route exact path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App

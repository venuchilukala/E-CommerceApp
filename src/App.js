import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App

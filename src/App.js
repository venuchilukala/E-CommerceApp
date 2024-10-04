import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
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
      <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route exact path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>} />
      <Route exact path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App

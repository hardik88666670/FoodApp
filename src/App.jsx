import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Succes from "./pages/Succes"
import Error from './pages/Error'
import ProtectedRoute from './Compont/ProtectedRoute';
import Cart from "./Compont/Cart"
const App = () => {
  return (
    <>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Succes' element={<ProtectedRoute element={<Succes />} />} />
        <Route path='/*' element={<Error />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
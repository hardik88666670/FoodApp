import React from 'react'
import Navbar from '../Compont/Navbar'
import CategoryMenu from '../Compont/CategoryMenu'
import FoodItem from '../Compont/FoodItem'
import Cart from '../Compont/Cart'
import NavberBoteemSection1 from '../Compont/NavberBoteemSection1'

const Home = () => {
  return (
    <>
    <Navbar/>
    <NavberBoteemSection1/>
    <CategoryMenu/>
    <FoodItem/>
    <Cart/>
    </>
  )
}
export default Home
import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../Slices/SearchSlice';
import logo from '../assets/logo.png'
import { Navigate,NavLink ,Link} from 'react-router-dom'

const Navbar = () => {

  const diapatch = useDispatch();
  return (
    <div>


      <nav className="flex items-center justify-between flex-wrap bg-white shadow-md px-6 py-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-green-600 text-2xl font-bold">
          <img src={logo} className='w-12 '/> <span className='pl-3'>FLAVORO FOOD</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-600">Home</a>
          <a href="#reviews" className="hover:text-green-600">Reviews</a>
          <a href="#top" className="hover:text-green-600">Top Picked</a>
          <Link to="/cart" className="hover:text-green-600">Order</Link>
          
        </div>

        {/* Search Bar */}
        <div className="mt-4 md:mt-0 md:flex md:items-center">

          <input className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' type="search" name="search" id="" placeholder='Search here' autoComplete='off' onChange={(e) => diapatch(setSearch(e.target.value))} />
          {/* <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          /> */}
        </div>
      </nav>

      {/* <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div>
          <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
          <h1 className='text-2xl font-bold'>Flavoro Food</h1>
        </div>
        <div>
          <input className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' type="search" name="search" id="" placeholder='Search here' autoComplete='off' onChange={(e) => diapatch(setSearch(e.target.value))} />
        </div>
      </nav> */}
    </div>
  )
}
export default Navbar
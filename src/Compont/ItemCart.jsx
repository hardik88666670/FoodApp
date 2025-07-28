import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../Slices/CartSlices.jsx'
import toast, { Toaster } from 'react-hot-toast';

const ItemCart = ({ id, name, img, qty, price }) => {

    const dishpatch = useDispatch();
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
                <img src={img} alt="" className='w-[50px] h-[50px]' />

                <div className='leading-5'>
                    <h2 className='font-bold text-gray-800'>{name}</h2>
                    <div className='flex justify-between'>
                        <span className='text-green-500 font-bold'>₨.{price}</span>
                        <div className='flex justify-center items-center gap-3 absolute right-8'>

                            <FaMinus onClick={() => qty > 1 ? dishpatch(decrementQty({ id })) : (qty = 0)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                            <span>{qty}</span>
                            <FaPlus onClick={() => qty >= 1 ? dishpatch(incrementQty({ id })) : (qty = 0)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                        </div>
                    </div>
                </div>
                <MdDelete onClick={() => {
                    dishpatch(removeFromCart({ id, img, name, price, qty }));
                    toast(`${name} Rempoved!`, {
                        icon: '👋',
                    });
                }} className='border-2  text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-0 text-xl transition-all ease-linear cursor-pointer absolute right-7' />
            </div>
        </>
    )
}
export default ItemCart
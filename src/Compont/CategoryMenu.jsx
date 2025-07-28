import React, { useEffect, useState } from 'react'
import { BiFoodMenu } from 'react-icons/bi';
import FoodData from '../Data/Food';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Slices/CategorySlice';
import { setSearch } from '../Slices/SearchSlice';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((Food) => Food.category))];
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
        // ['Lunch','Breakfast','Dinner','Snacks']
    };
    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.Category.category);

    return (
        <div className='ml-6'>
            <div className='flex justify-around items-center'>
                 <h3 className='text-xl font-semibold flex justify-center items-center mt-10'>Find the best Food</h3>
            </div>
           
            <div className='my-5 flex gap-3 overflow-x-scroll scroll-smoot lg:overflow-x-hidden' >

                <button onClick={() => dispatch(setCategory("All"))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>
                {
                    categories.map((category, index) => {
                        return (
                            <button onClick={() => dispatch(setCategory(category))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>
                        )
                    })
                }
                {/* <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
                <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
                <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
                <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
                <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Snacks</button> */}
            </div>
        </div>
    )
}
export default CategoryMenu;

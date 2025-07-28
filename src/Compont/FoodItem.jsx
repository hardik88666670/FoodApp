import React from 'react'
import Card from './Card'
import Food from '../Data/Food.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import FoodData from '../Data/Food.js';

const FoodItem = () => {
    const Category = useSelector((state) => state.Category.category);
    const search = useSelector((state) => state.search.search);
    const handleToaster = (name) => toast.success(`Added ${name}`);
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex flex-wrap gap-6 justify-center items-center lg:justify-start mx-6 my-10'>
                {
                    Food.filter((food) => {
                        if (Category === "All") {
                            return food.name.toLowerCase().includes(search.toLowerCase());
                        } else {
                            return Category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
                        }
                    }).map((Food) => (
                        <Card key={Food.id} id={Food.id} name={Food.name} price={Food.price} desc={Food.desc} rating={Food.rating} img={Food.img} handleToast={handleToaster} />

                    ))
                }
                {/* {
                    Food.map((Food) => {
                        return <Card key={Food.id} id={Food.id} name={Food.name} price={Food.price} desc={Food.desc} rating={Food.rating} img={Food.img} handleToast={handleToaster} />;
                    })} */}

            </div>
        </>
    );
}
export default FoodItem
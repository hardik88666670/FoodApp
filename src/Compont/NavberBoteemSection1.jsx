import React from 'react'
import PizzaImg from '../assets/delicious-pizza-studio.jpg'

const NavberBoteemSection1 = () => {
    return (
        <>
            <div>
                {/* <img className='w-full flex flex-wrap ' src={PizzaImg} alt="" /> */}
                <img
                    className="w-full lg:h-[700px] flex flex-wrap m-4 opacity-80 rounded-lg shadow-lg"
                    src={PizzaImg}
                    alt="Pizza"

                />
               

            </div>

        </>
    )
}

export default NavberBoteemSection1
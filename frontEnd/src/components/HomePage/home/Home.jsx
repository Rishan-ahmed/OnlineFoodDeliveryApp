import React from 'react'
import "./home.css"
import MICarousel from '../HPMultiItemcarousel/MICarousel'
import FRCard from '../favoriteRestaurnets/FRCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_all_restaurents } from '../../state/Restaurent/Action'
import CartItems from '../../CartPage/CartItems'
function Home() {
  const cardItems = [1,1,1,1,1,1,1,,1,1,1]
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(Get_all_restaurents())
},[])
const { restaurant, isLoading, error } = useSelector((state) => state.Restuarant);
console.log(restaurant)
  return (
    <div >
        <section className='relative flex items-center justify-center banner'>
        <div className='text-black text-center relative z-40' >
            <h1 className='text-[#e91e63] text-3xl lg:text-6xl font-bold py-5 '>SnapBite</h1>
            <p className='text-gray-300 lg:text-4xl'>Craving Delivered in a Snap!</p>
        </div>
        <div className='cover z-30 absolute top-0 left-0 right-0'></div>
        </section>
        <section>
          <h1 className='py-5 pl-5 font-bold text-2xl lg:py-10 lg:px-20'>Top Meals</h1>
        <MICarousel/>
        </section>
        <section>
        <div className='py-10 pl-5 lg:py-10 lg:px-20'>
          <h1 className='font-bold text-2xl'>Pic from my favorite Restaurants</h1>
          
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

          <div className='flex flex-wrap justify-around gap-5 items-center px-10 py-10'>
            {restaurant && restaurant.length > 0 ? (
              restaurant.map((item, index) => (
                console.log(item),
                <FRCard key={index} name={item.name} desc={item.description} />
              ))
            ) : (
              <p>No restaurants available</p>
            )}
          </div>
        </div>
      </section>

   </div>
  
  )
  
}

export default Home
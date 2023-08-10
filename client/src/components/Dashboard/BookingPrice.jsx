import React from 'react'
import "../../styles/BookingPrice.css"
import NavbarLogo from"../../assests/booking-navbar-logo.png"
import bookingGraph from "../../assests/booking-graph.png"
import goldStar from "../../assests/gold-star.png"
import addOn from "../../assests/add.png"
import minusOn from "../../assests/minus.png"
import bookingLocation from "../../assests/booking-select-city.png"
import goCart from "../../assests/bag.png"

const BookingPrice = () => {
  return <>
     <div className='price-container'>
     <div className='booking-navbar'>
        <div className='navbar-logo'>
           <img src={NavbarLogo} alt='navbar-logo'/>
        </div>
        <div className='navbar-btn-container'>
           <div className='navbar-btn-one'>
             <button>
                City Select
                <div className='navbar-btn-one-img'><img src={bookingLocation} alt='img'/></div>
             </button>
           </div>
           <div className='navbar-btn-two'>
           <button>
           Go to Cart
                <div className='navbar-btn-two-img'><img src={goCart} alt='img'/></div>
             </button>
           </div>
        </div>
     </div>
     <div className='booking-graph'>
       <img src={bookingGraph} alt='img'/>
     </div>
     <div className='booking-price-category'>
       <div className='category-color-text'>
       Colour Code
       </div>
       <div className='category-color-code-one'>
         <div className='category-grade-one'>
         H1 - 
         </div>
         <div className='category-grade-color-green'>

         </div>
       </div>
       <div className='category-color-code-two'>
       <div className='category-grade-two'>
         H2 - 
         </div>
         <div className='category-grade-color-orange'>

         </div>
       </div>
       <div className='category-color-code-three'>
       <div className='category-grade-three'>
         H3 - 
         </div>
         <div className='category-grade-color-black'>

         </div>
       </div>
     </div>
     <div className='price-row-one'>
       <div className='price-row-one-one'>
         <img src={goldStar} alt='img' />
       </div>
       <div className='price-rate-one'>
       ₹55,000
       </div>
       <div className='price-row-one-two'>
       32 Sq. Mt.
       </div>
       <div className='price-row-one-three'>
        <img src={addOn} alt='img'/>
       </div>
       <div className='price-row-one-four'>
         1
       </div>
       <div className='price-row-one-five'>
         <img src={minusOn} alt='img'/>
       </div>
     </div>

     <div className='price-row-two'>
     <div className='price-row-two-one'>
       </div>
       <div className='price-rate-two'>
       ₹35,000
       </div>
       <div className='price-row-two-two'>
       24 Sq. Mt.
       </div>
       <div className='price-row-two-three'>
        <img src={addOn} alt='img'/>
       </div>
       <div className='price-row-two-four'>
         2
       </div>
       <div className='price-row-two-five'>
         <img src={minusOn} alt='img'/>
       </div>
     </div>
     <div className='price-row-three'>
     <div className='price-row-three-one'>
       </div>
       <div className='price-rate-three'>
       ₹25,000
       </div>
       <div className='price-row-three-two'>
       18 Sq. Mt.
       </div>
       <div className='price-row-three-three'>
        <img src={addOn} alt='img'/>
       </div>
       <div className='price-row-three-four'>
         3
       </div>
       <div className='price-row-three-five'>
         <img src={minusOn} alt='img'/>
       </div>
     </div>
     <div className='back-to-city'>
     &lt; Back to City 
     </div>
     </div>
  </>
}

export default BookingPrice
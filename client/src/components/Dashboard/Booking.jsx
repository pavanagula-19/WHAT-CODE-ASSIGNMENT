import React from 'react'
import "../../styles/Booking.css"
import NavbarLogo from"../../assests/booking-navbar-logo.png"
import bookingHeaderLogo from "../../assests/booking-header-logo.png"
import searchLogo from "../../assests/booking-input-search-logo.svg"
import locationIcon from "../../assests/location-icon.png"
import imageIcon from "../../assests/order-icon.png"
import footerContact from "../../assests/booking-order-footer.svg"

const Booking = () => {
  return <>
    <div className='booking-container'>
     <div className='booking-navbar'>
        <div className='navbar-logo'>
           <img src={NavbarLogo} alt='navbar-logo'/>
        </div>
     </div>
     <div className='booking-header'>
     <div className='booking-header-title'>
     Select your Location  
     </div>
     <div className='booking-header-logo'>
        <img src={bookingHeaderLogo} alt='img'/>
     </div>
     </div>
     <div className='booking-search-input'>
      <input placeholder='Search'/>
      <img src={searchLogo} alt='img'/>
     </div>
     <div className='booking-location-one'>
      <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Raipur
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-location-two'>
     <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Haryana
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-location-three'>
     <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Amristar
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-location-four'>
     <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Nagpur
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-location-five'>
     <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Pune
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-location-six'>
     <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Nashik
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-location-seven'>
     <div className='booking-location-icon'>
       <img src={locationIcon} alt='img'/>
      </div>
      <div className='booking-location-title'>
      Goa
      </div>
      <div className='booking-location-date'>
       09/12/2023
      </div>
      <div className='booking-location-order'>
      Book Now
      </div>
      <div className='booking-location-order-icon'>
       <img src={imageIcon} alt='img'/>
      </div>
     </div>
     <div className='booking-order-footer'>
       <div className='booking-order-footer-title'>
       Not found the City you were looking for 😕?
       </div>
       <div className='booking-order-footer-contact'>
          <img src={footerContact} alt='img'/>
          <div className='booking-order-footer-contact-title'>
          Contact Sales ☎️
          </div>
       </div>
          </div>
    </div>
  </>
}

export default Booking
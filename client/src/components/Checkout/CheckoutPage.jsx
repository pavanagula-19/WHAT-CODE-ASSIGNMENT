import React from 'react'
import "../../styles/CheckoutPage.css"
import "../../styles/Home.css"
import NavBar from '../NavBar'
import bookingLocation from "../../assests/booking-select-city.png"

const CheckoutPage = ({ checkClick }) => {
    return <>
        <div className='checkout-container'>
            <NavBar />
            <div className='check-btn-one' onClick={() => checkClick()}>
                <button>
                    City Select
                    <div className='check-btn-one-img'><img src={bookingLocation} alt='img' /></div>
                </button>
            </div>
            <div className='checkout-title'>
                Shopping Bag - Checkout 🛒
            </div>
            <div className='circle-green'>

            </div>
            <div className='price-one'>
                <div className='price-rate-one'>
                    ₹25,000
                </div>
                <div className='price-details'>
                    Raipur | Quantity - 3 | Stall Type Details
                </div>
                <div className='price-conditions'>
                    <span style={{
                        color: '#555454',
                        fontFamily: 'Open Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>Terms and Conditions</span> <span style={{
                        color: '#7C7C7C',
                        fontFamily: 'Open Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                    }}>-</span> <span style={{
                        color: '#7C7C7C',
                        fontFamily: 'Open Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                    }}>favorite social network and share our icons with your contacts or friends. If you don’t have these social networks</span>
                </div>
            </div>
            <div className='circle-orange'>

            </div>
            <div className='count'>
                1
            </div>
            <div className='price-two'>
                <div className='price-rate-two'>
                    ₹25,000
                </div>
            </div>
            <div className='circle-black'>

            </div>
            <div className='count'>
                2
            </div>
            <div className='price-three'>
                <div className='price-rate-three'>
                    ₹25,000
                </div>
            </div>
            <div className='payment-container'>
                <div className='offer-text'>
                    <span style={{ fontSize: '80px' }}>.</span>  We levy a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event.
                </div>
                <div className='sub-total-container'>
                    <div className='sub-total'>
                        Subtotal
                    </div>
                    <div className='sub-total-price'>
                        ₹3,20,000.00
                    </div>
                </div>
                <div className='tax-container'>
                    <div className='tax-txt'>
                        Tax
                    </div>
                    <div className='tax-price'>
                        ₹32,000.00
                    </div>
                </div>
                <div className='total-txt'>
                    TOTAL
                </div>
                <div className='total-price'>
                    ₹3,52,000.00
                </div>
                <div className='pay-now'>
                    Pay Now
                </div>
            </div>
        </div >
    </>
}

export default CheckoutPage
import Login from "./components/Login";


import BookingPrice from "./components/Dashboard/BookingPrice";

 import Booking from "./components/Dashboard/Booking";
import { useState } from "react";
import CheckoutPage from "./components/Checkout/CheckoutPage";


function App() {
  const [loginId,setLoginId] = useState(false)
  const [bookClick,setBookClick] =useState(false)
  const [bookprice,setBookPrice] = useState(false)
  const handleLoginSuccess=()=>{
    setLoginId(!loginId)
  }
  const bClick=()=>{
    setBookClick(!bookClick)
  }
  const cClick=()=>{
    setBookPrice(!bookprice)
  }
  const checkClick=()=>{
    setBookPrice(!bookprice)
    setBookClick(!bookClick)
  }
  return <>
    {!loginId&&<Login handleLoginSuccess={handleLoginSuccess}/>}
    {loginId&&!bookClick&&<Booking bClick={bClick}/>}
    {loginId&&bookClick&&!bookprice&&<BookingPrice bClick={bClick} cClick={cClick}/>}
    {bookprice&&<CheckoutPage checkClick={checkClick}/>}

    
    
  </>

}

export default App;

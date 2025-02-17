import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import arraow from '../../assets/arrow_icon.png'
import './Navbar.css'
import { coincontext } from '../../Context/Context'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const {setCurrency} = useContext(coincontext)

  const handlecurrency = (e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name:"usd",Symbol:"$"})
        break;
      }
      case "eur":{
        setCurrency({name:"eur",symbol:"€"})
        break;
      }
      case "inr":{
        setCurrency({name:"inr",symbol:"₹"})
        break;
      }
      default :{
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
    }
  }

  return (
    <div className='Navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
        </Link>
      <ul>
        <Link to={'/'}>
         <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onClick={handlecurrency}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={arraow} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar
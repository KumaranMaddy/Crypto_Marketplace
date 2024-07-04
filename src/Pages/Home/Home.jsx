import React,{useContext,useEffect,useState} from 'react'
import './Home.css'
import { coincontext } from '../../Context/Context'
import { Link } from 'react-router-dom'
function Home() {

  const {allcoins,currency} = useContext(coincontext)
  const [displaycoins,setdisplaycoins] = useState([])
  const [input,setinput] =useState('')

  const handlechange = (e)=>{
    setinput(e.target.value)
 
    if(e.target.value === ""){
        setdisplaycoins(allcoins)
    }
  }

  const handlesearch = async (e)=>{
    e.preventDefault();
    const coins = await allcoins.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setdisplaycoins(coins)
  }

  useEffect(()=>{
    setdisplaycoins(allcoins)
  },[allcoins])

  
  return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br/> Crypto Marketplace</h1>
            <p>Welcome to the world's largest crytocurrency 
                marketplace.Sign up to explore more about cryptos.
            </p>

            <form onClick={handlesearch}>
                <input onChange={handlechange} value={input} list='coinlist' type='text' placeholder='Search crypto..' required></input>

               <datalist id='coinlist'>
                  {allcoins.map((item,index)=>(<option key={index} value={item.name} />))}
               </datalist>

                <button type='submit'> Submit</button>
            </form>

        </div>
        <div className='crypto-table'>
            <div className='table-layout'>
               <p>#</p>
               <p>Coins</p>
               <p>Price</p>
               <p style={{textAlign:"center"}}>24H Change</p>
               <p className='market_cap'>Market Cap</p>
            </div>
            {
                displaycoins.slice(0,10).map((item,index)=>(
                    <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
                        <p>{item.market_cap_rank}</p>
                    <div>
                        <img src={item.image} alt='' />
                        <p>{item.name +" - " + item.current_price}</p>
                    </div>
                     <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                     <p className={item.market_cap_change_percentage_24h>0?"green":"red"}>
                        {Math.floor(item.market_cap_change_percentage_24h*100)/100}
                    </p>
                     <p className='market_cap'> {currency.symbol} {item.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home
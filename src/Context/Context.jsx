import {createContext,useState,useEffect} from "react"

export const coincontext = createContext();

  const CoinContextprovider = (props)=>{

const [allcoins,setallcoins]= useState([])
    const[currency,setCurrency] = useState({
        name:"usd",
        symbol:"$"
    })
    
    const fetchcoindata = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ax5LEgsXEQ8AJsNm2pSGX4Dq'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setallcoins(response))
            .catch(err => console.error(err));
    }

     useEffect(()=>{
        fetchcoindata();
     },[currency])

    const Contextvalue = {
        allcoins,currency,setCurrency
    }

    return(
        <coincontext.Provider value={Contextvalue}>
            {props.children}
        </coincontext.Provider>
    )
}

export default CoinContextprovider;
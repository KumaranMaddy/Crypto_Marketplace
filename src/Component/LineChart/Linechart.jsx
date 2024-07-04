import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
function Linechart({historical}) {
    const [data,setdata] = useState([["Date","Prices"]])

    useEffect(()=>{
        let datacopy = [["Date","Prices"]]
        if(historical.prices){
            historical.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })

            setdata(datacopy)
        }
        
    },[historical])

  return (
      <Chart
       chartType='LineChart'
       data={data}
       height="100%"
       legendToggle 
      />

  )
}

export default Linechart
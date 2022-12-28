import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/shayaries.css'
export const Shayaries = () => {


  let Api = "https://script.googleusercontent.com/macros/echo?user_content_key=KrrShm_UYqk_Nln2wLEtv70ZlTGpslbAFh2n9LZ9dScfkJLNlfanocip0Xa0YTsZJO8hslF0C6D0Y3ijJ9rKq-VIQ2p8F1ujm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDRivZHVSPQbWjSkLQaNnfvQi1Yej6J5ut_gbc5up5qDaMr-Ac60ejyDltHLfJuLBrCFhH0ML87bWCkbDJlWMb91b9gWXA58wA&lib=Mi8kOabwM7EMGNIMHtUG2rgm011pu0fnL";

  const [shayaries,setShayaries] = useState({});

  const [isLoading,setIsLoading] = useState(true);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setShayaries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchApiData(Api);
  },[Api]);


  if(isLoading){
    return (
      <div className="load"><p>Loading...</p></div>
    )
  }
  
  return (
    <div>
      {shayaries.data.map(item => (
        <div className='quote-box' key={item.id}>
          <p className='quote'>"{item.Shayari}"</p>
          <p className='author'>~ Mr. Ar</p>
        </div>
      ))}
    </div>
  )
}

export default Shayaries;



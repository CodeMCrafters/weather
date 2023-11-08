import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header/Header';
import Weather from './components/Weather/Weather';
import axios from 'axios';
import { ScaleLoader	 } from "react-spinners";


function App() {
  const [search,setSearch] = useState('');
  const [data,setData] = useState({
    celsius: 0,
    name:'Grad',
    images:'',
  });

  useEffect( () =>{
  

    const timeOut = setTimeout( async () =>{
      try {
        const apiKey = 'eb2fa50b58b545608c3151014232510'; 
        const apiUrl  = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=yes`;
        const res = await axios.get(apiUrl);
        let images = '';
        setData({
          celsius: res.data.current.temp_c,
          name: res.data.location.name,
          images: res.data.current.condition.icon,
        }
        )
      } catch (error) {
        
      }
    },2000)

    return () => clearTimeout(timeOut);

  },[search])
  return (
    <>
    <div className='wrapper'>
      <Header search = {search} setSearch={setSearch}/>
        <hr/>
        
      <Weather data = {data} />

    </div>
    
  
    </>
  );
}

export default App;

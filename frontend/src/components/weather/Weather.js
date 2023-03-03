import React, {useState, useEffect} from 'react';
import './css/weather.css';
import axios from 'axios';

import ShowDetails from './ShowDetails';

function Main(props) {
    const [weather, setWeather] = useState({'a':1});
    const [city, setCity] = useState('');
    // const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        let timer = setInterval(()=>setDate(new Date()),1000)
        return function cleanup(){
            clearInterval(timer)
        }
    })
    
    const sendRequest = async ()=> {
      console.log(city)
      const res = await axios.post(`http://localhost:5000/api/v1/weather`, {
        city:city
      })
      if (res.data.status===true) {
        return setWeather(res.data)
      } else if(res.data.status===false){
          return alert("Oops, there seems to be an error!(wrong location)");
        } else{
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      }
    const handeleOnSubmit = (e)=>{
      e.preventDefault();
      sendRequest()
      alert(city)
    }
  return (
    <>
        <div className='cardContainer'>
            <div className='time-input-container'>
                <div className='time-container'>
                    <p>{date.toString().substring(0,25)}</p>
                </div>
                <div className='input-container'>   
                  <form onSubmit={handeleOnSubmit}>
                    <input type='text' value={city} placeholder='Enter city' onChange={(e) => setCity(e.target.value)}/>
                    <button>Submit</button>
                  </form>          
                </div>
            </div>
            <ShowDetails data={weather}/>
        </div>
      </>
  )
}

export default Main
import React from 'react';
import {BsCloudHaze2Fill, BsFillSunriseFill, BsFillSunsetFill} from "react-icons/bs";
import {MdVisibility, MdCompress, MdLocationPin, MdWaterDrop, MdWindPower, MdDirections} from "react-icons/md";
import {TbWorldLongitude,TbWorldLatitude} from "react-icons/tb";
import {FaTemperatureHigh, FaTemperatureLow} from "react-icons/fa";


const ShowDetails = ({data}) => {
  return (
    <div className='weather-detail-container'>
        <div className='temp-details-container'>
            <div className='temp-detail'>
                {!(data.data?.name)?  <h4><MdLocationPin/></h4>: <h4><MdLocationPin/> {data.data?.name}</h4>}
                <hr/>
                {(!(data.data?.main?.feels_like))? <p><FaTemperatureLow/> --</p>: <p><FaTemperatureLow/> {data.data?.main?.feels_like}&deg;C</p>}
                {(!(data.data?.main?.temp_max))? <p><FaTemperatureHigh/> --</p>: <p><FaTemperatureHigh/> {data.data?.main?.temp_max} &deg;C</p>}
                {(!(data.data?.main?.humidity))? <p><MdWaterDrop/> --</p>: <p><MdWaterDrop/> {data.data?.main?.humidity}%</p>}
                {(!(data.data?.visibility))? <p><MdVisibility/> --</p>: <p><MdVisibility/> {data.data?.visibility}m</p>}
                <hr/>
            </div>
        </div>
        <div className='temp-more-detail-container'>
            <div className='weather-more-detail'> 
                <hr/>
                {(!(data.data?.name))?  <p><BsCloudHaze2Fill/> --</p>: <p><BsCloudHaze2Fill/> {data.data?.clouds?.all}%</p> }
                {!(data.data?.wind?.speed)?  <p><MdWindPower/> --</p>: <p><MdWindPower/> {data.data?.wind?.speed} <i>kmph</i></p> }       
                {!(data.data?.wind?.deg)?  <p><MdDirections/> --</p>: <p><MdDirections/> {
                (data.data?.wind?.deg<90)? <i>EAST </i>: (data.data?.wind?.deg<180)? <i>North</i>: (data.data?.wind?.deg<270)? <i>West</i>: <i>South</i>
                }</p> }
                {!(data.data?.main?.pressure)?  <p><MdCompress/> --</p>: <p><MdCompress/> {data.data?.main?.pressure}</p> } 
                {!(data.data?.sys?.sunrise)?  <p><BsFillSunriseFill/> -- </p>: <p><BsFillSunriseFill/> {data.data?.sys?.sunrise.toString()}</p> }
                {!(data.data?.sys?.sunset)?  <p><BsFillSunsetFill/> -- </p>: <p><BsFillSunsetFill/> {data.data?.sys?.sunset.toString()}</p> }
                {!(data.data?.coord?.lon)?  <p><TbWorldLongitude/> --</p>: <p><TbWorldLongitude/> {data.data?.coord?.lon}</p> }
                {!(data.data?.coord?.lat)?  <p><TbWorldLatitude/> --</p>: <p><TbWorldLatitude/> {data.data?.coord?.lat}</p> } 
            </div>
        </div>
    </div>
  )
}

export default ShowDetails
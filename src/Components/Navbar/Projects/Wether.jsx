import React from 'react'
import './Wether.css'
import w1 from '../../../assets/wetherapp.png'
import w2 from '../../../assets/wether2.png'
import w3 from '../../../assets/we.png'





const Wether = () => {
  return (
    <div>

            <div className='weather-app' id='weather'>
                <div className="weather_head">
                    <h1>WEATHER-APP</h1>
                    </div>
                    <div className="weather-overview">
                        <u>
                        <h2>Project Overview</h2></u>
                        <p>
                        The Weather App is a simple and intuitive application that provides real-time weather updates for any location worldwide.
                         It helps users check current weather conditions, temperature, humidity and wind speed
                        </p>
                        
                    </div>
                    <div className="weather-key">
                        <u>
                        <h2>Key Features</h2></u>
                        
                            <li> Real-time Weather Data, Search by City.</li><br></br>
                            <li>Displays temperature, humidity, wind speed, and weather conditions.</li>
                        
                    </div>
                    <div className="weather-tech">
                        <u>
                        <h2> Technologies Used</h2></u>
                        
                            <li>HTML,CSS,JavaScript</li><br/>
                          
                        
                      
                    </div>
                    <div>
                        <h2></h2>
                    </div>

                    <div className="weather-imgh2">
                        <u>
                        <h2>Images</h2></u>
                    </div>
                    <div className="weather-img">
                       
                       
                        <div className="weather-img1">
                            <img src={w2} alt=""width={350} height={150}/>
                            </div>
                            <div className="weather-img1">
                                <img src={w1} alt=""width={350} height={150} />
        
                            </div>
                            <div className="weather-img1">
                                <img src={w3} alt=""width={350} height={150}/>
        
                            </div>
        
                        
                      
                    </div>
        
        
        
                    


                    <div className='weather-link'>
                        
                        <div className='weather-link-git'>   <h4>GitHub :</h4>  </div>
                         <div className='weather-link-git'> <a href="https://github.com/Fathimashahanaip/Weather-App">https://github.com/Fathimashahanaip/Weather-App</a>
                         </div> 
                         </div>
                         </div>
        
    </div>
  )
}

export default Wether
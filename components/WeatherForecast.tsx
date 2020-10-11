import React from 'react'

const WeatherForecast = () => {
    return(
    <div className='weather'>
        <p className='weather__text'>The weather today: <span>28 °C</span></p>
        <i className='weather__icon'>☼</i>
    </div>
    )
}

export default WeatherForecast;
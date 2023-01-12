import { useState } from "react";

import "./weatherInfo.scss";

const WeatherInfo = () => {

    const [weather, setWeather] = useState('sunny');

    //общение с сервером, будем вытаскивать погоду и подбирать соответствующую анимацию (класс)
    //const {weather} = useSelector(state => state.weather)

    return(
        <div className="left-side__weather weather">
        <p className="weather__text">
            sunny
        </p>
        <div className="sunny"></div> 
        </div>
    )
}

export default WeatherInfo;
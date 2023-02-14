import { useEffect, useState } from "react";
import useWeatherService from "../../services/WeatherService"
import setContent from "../../utils/setContent";
import { CSSTransition } from 'react-transition-group';

import "./weatherInfo.scss";

const WeatherInfo = (props) => {

    const weatherConditions = {
        sunny: [1000, 1000],
        cloudy: [1003, 1006],
        overcast: [1009, 1009],
        mist: [1030, 1030],
        snow: [[1114, 1117], [1204, 1237]],
        fog: [1135, 1147],
        rain: [[1150, 1201], [1240, 1246]],
    }


    const [weather, setWeather] = useState('sunny');
    const {getWeatherByCityName, process, setProcess} = useWeatherService();

    useEffect(() => {
        getWeatherByCityName(props.city)
            .then(onWeatherLoaded)
            .then(() => setProcess('confirmed'));
    }, [props.city])

    const onWeatherLoaded = (weather) => {
        const { main, isDay, code } = weather;
        setWeather(main);
        chooseImg(code, isDay);
    }

    const chooseImg = (code, isDay) => {
        let mainWeather;
        let weatherCodes = Object.values(weatherConditions);
        // console.log(weatherCodes);
        let keys = Object.keys(weatherConditions);
        //перед запуском этого цикла поменять process
        for (let codeRange in weatherCodes){
            // console.log(code, weatherCodes[codeRange]);

            if (checkInBetween(code, weatherCodes[codeRange])){
                mainWeather = keys[codeRange];
                break;
            }
        }
        switch (mainWeather){
            case 'sunny':
                if (!isDay)
                    props.setWeather('night');
                else props.setWeather('sunny');
                break;
            case 'cloudy':
                props.setWeather('cloudy');
                break;
            case 'overcast':
                props.setWeather('overcast');
                break;
            case 'mist':
                props.setWeather('mist');
                break;
            case 'snow':
                props.setWeather('snowy');
                break;
            case 'fog':
                props.setWeather('fog');
                break;
            case 'rain':
                props.setWeather('rainy');
                break;
            default:
                return false;
        }
    }

    const checkInBetween = (code, arr) => {
        for (let i = 0; i < arr.length; i++){
            if (!Array.isArray(arr[0])){
                return (code >= arr[0] && code <= arr[1])
            }
            else{
                let isBetweenFirst = checkInBetween(code, arr[0]);
                let isBetweenSecond = checkInBetween(code, arr[1]);
                return (isBetweenFirst || isBetweenSecond)
            }
        }
    }

    //общение с сервером, будем вытаскивать погоду и подбирать соответствующую анимацию (класс)
    //const {weather} = useSelector(state => state.weather)

    return(
        <div className="left-side__weather weather">
            <CSSTransition 
                in={process === 'loading'}
                timeout={2000}
                classNames="weather-text">
            
                    <div className="weather__text">
                        {setContent(process, View, weather)}
                    </div>
                

            </CSSTransition>
            
        </div>

    )
    // в sunny менять название классов (switch)
}

const View = ({data}) => {
    return (
        <>
            {data}
        </>
    )
}

export default WeatherInfo;
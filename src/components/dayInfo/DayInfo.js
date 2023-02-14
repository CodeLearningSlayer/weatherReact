import { useEffect, useState } from "react";
import useWeatherService from "../../services/WeatherService"
import Loader from "../loader/Loader";
// import useCoordsService from "../../services/СoordsService";
import "./dayInfo.scss"

const setContent = (process, Component, newItemLoading) => {
    switch (process){
        case 'waiting':
            return <Loader/>
        case 'loading':
            return newItemLoading ? <Component/> : <Loader/>;
        case 'confirmed':
            return <Component/>
        case 'error':
            return new Error();
        default:
            throw new Error('unexpected proccess state');
    }
} 

const DayInfo = (props) => {

    const {getWeatherByCityName, process, setProcess} = useWeatherService();
    
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [time, setTime] = useState();
    const [temp, setTemp] = useState();
    const [dayOfWeek, setDayOfWeek] = useState();


    useEffect(() => {
        setNewItemLoading(true);
        getWeatherByCityName(props.city)
            .then(onWeatherLoaded)
            .then(() => setProcess('confirmed'));
    }, [props])


    const onWeatherLoaded = (weatherInfo) => {
        const {
            temp,
            time,
            dayOfWeek
        } = weatherInfo;
        setTemp(Math.floor(temp));
        setTime(time);
        setDayOfWeek(dayOfWeek);
        setNewItemLoading(false);
    }

    const capitalizeFirstLetter = (word) => {
        let firstLetter = word.charAt(0).toUpperCase();
        return firstLetter + word.slice(1);
    }


    function renderItems(){
        return(
            <div className="left-side__info info">
                <div className="info__temperature">{temp + '°C'}</div>
                <div className="info__inner">
                    <div className="info__inner-town">{props.city}</div>
                    <div className="info__inner-date">{time?.split(':')[0]}<span className="time-animation">:</span>{time?.split(':')[1]} - {
                    capitalizeFirstLetter(new Date(dayOfWeek).toLocaleString('en-GB', {weekday:'long', }))}
                    </div>
                </div>
                <div className="info__weather">
                </div>
            </div>
        )
    }

    return (
        <>
            {setContent(process, () => renderItems(), newItemLoading)}
        </>
    )
    
}



export default DayInfo;
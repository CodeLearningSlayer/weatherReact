import "./weekForecast.scss"
import sun from "../../assets/sun.svg"


const WeekForecast = () => {


    return (
        <div className="right-side__forecast forecast">
            <h5 className="forecast__title">Next days</h5>
            <ul className="forecast__list">
                <li className="forecast__list-item forecast-day">
                    <p className="forecast-day__name">Sunday</p>
                    <img src={sun} alt="sun" className="forecast-day__img"/>
                    <p className="forecast-day__temp">13°C - 18°C</p>
                </li>
                <li className="forecast__list-item forecast-day">
                    <p className="forecast-day__name">Sunday</p>
                    <img src={sun} alt="sun" className="forecast-day__img"/>
                    <p className="forecast-day__temp">13°C - 18°C</p>
                </li>
                <li className="forecast__list-item forecast-day">
                    <p className="forecast-day__name">Sunday</p>
                    <img src={sun} alt="sun" className="forecast-day__img"/>

                    <p className="forecast-day__temp">13°C - 18°C</p>
                </li>
                
            </ul>
        </div>
    )
}

export default WeekForecast;
import "./weatherDetails.scss"


const WeatherDetails = () => {


    return (
        <div className="right-side__details details">
                <h5 className="details__title">Weather details</h5>
                <ul className="details__list">
                    <li className="details__list-item">
                        <span>Cloudy</span>
                        <span>60%</span>
                    </li>
                    <li className="details__list-item">
                        <span>Humidity</span>
                        <span>60%</span>
                    </li>
                    <li className="details__list-item">
                        <span>Wind</span>
                        <span>60%</span>
                    </li>
                </ul>
        </div>
    )
}

export default WeatherDetails;
import "./cityList.scss"

const CityList = () => {


    return (
        <ul className="right-side__cities city-list">
            <li className="city-list__item">
                <a href="#" className="city-list__link city-list__link--active">New York</a>
            </li>
            <li className="city-list__item">
                <a href="#" className="city-list__link">London</a>
            </li>
            <li className="city-list__item">
                <a href="#" className="city-list__link">Moscow</a>
            </li>
            <li className="city-list__item">
                <a href="#" className="city-list__link">Berlin</a>
            </li>
        </ul>
    )
}

export default CityList;
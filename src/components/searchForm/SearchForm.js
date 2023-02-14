import "./searchForm.scss"
import { useState } from "react";
import useWeatherService from "../../services/WeatherService";

const SearchForm = (props) => {

    const [city, setCity] = useState();
    const [searchError, setSearchError] = useState(false)
    
    const {getWeatherByCityName} = useWeatherService()

    const changeCity = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className="search">
            <input 
            type="text" 
            value={city}
            placeholder="Another location" 
            className="search__input"
            onChange={changeCity}/>
            <button className="search__btn"
                    onClick={() => {
                        getWeatherByCityName(city)
                        .then(({city}) => props.changeCity(city))
                        .catch(() => setSearchError(true))
                    }}>
            </button>
        </div>
    )
}

export default SearchForm;
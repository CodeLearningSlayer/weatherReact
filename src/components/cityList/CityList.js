import "./cityList.scss"
import {  useState } from "react"
const CityList = (props) => {
    
    const [isActive, setIsActive] = useState()

    const cityList = ["New York", "London", "Moscow", "Berlin"];

    return (
        <ul className="right-side__cities city-list">
            {cityList.map((city, index) => {
                return (
                    <li className="city-list__item">
                        <a onClick={() => {
                            setIsActive(index)
                            props.changeCity(city)
                            }
                        } 
                        className={`city-list__link ${index === isActive ? 'city-list__link--active' : false}`}>{city}</a>
                    </li>
                )
            })}

        </ul>
    )
}

export default CityList;
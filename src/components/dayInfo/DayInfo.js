import "./dayInfo.scss"

const DayInfo = () => {

    //const {temperature, town, time} = useSelector(state => state.day)

    return(
        <div className="left-side__info info">
            <div className="info__temperature">16°C</div>
            <div className="info__inner">
                <div className="info__inner-town">London</div>
                <div className="info__inner-date">04<span className="time-animation">:</span>05 - Monday</div>
            </div>
        </div>
    )
}

export default DayInfo;
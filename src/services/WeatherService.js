import { useHttp } from "../hooks/http.hook";


const useWeatherService = () => {

    const {request, process, setProcess} = useHttp();

    const _apiBase = 'http://api.weatherapi.com/v1';
    const _apiKey = 'f52c360e687e442c83f143607231201';

    // 'http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London'
    

    const getWeatherByCityName = async (city) => {
        const res = await request(`${_apiBase}/current.json?key=f52c360e687e442c83f143607231201&q=${city}`);
        return _transformWeather(res);
    }
    const _transformWeather = (weather) => {
        console.log(weather, 'Info');
        return {
            code: weather.current.condition.code,
            city: weather.location.name,
            time: weather.location.localtime.split(" ")[1],
            dayOfWeek: weather.location.localtime.split(" ")[0],
            main: weather.current.condition.text,
            temp: weather.current.temp_c,
            isDay: weather.current.is_day,
            humidity: weather.current.humidity,
            windSpeed: weather.current.wind_kph,
            icon: weather.current.condition.icon
        }
    }

    return {
        getWeatherByCityName,
        process,
        setProcess
    }
}

export default useWeatherService;
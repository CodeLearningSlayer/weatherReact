import { useHttp } from "../hooks/http.hook";

const useCoordsService = () => {

    const {request} = useHttp();

    const _apiBase = 'http://api.weatherapi.com/v1';
    const _apiKey = 'f52c360e687e442c83f143607231201';
    const _cityLimit = 5;
    
    // 'http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London'
    // http://api.weatherapi.com/v1/search.json?key=<YOUR_API_KEY>&q=lond


    const getCoords = async(cityName) => {
        const res = await request(`${_apiBase}/search.json?key=${_apiKey}&lang=ru$q=${cityName}`);
        return _transformCoords(res)
    }

    const _transformCoords = (coords) => {
        return {
            lat: coords[0].lat,
            lon: coords[0].lon
          }
    }

    return {
        getCoords
    }

}

export default useCoordsService;
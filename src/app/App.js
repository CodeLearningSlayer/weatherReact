import { useEffect, useState } from "react";
import "./App.css";
import WeekForecast from "../components/weekForecast/WeekForecast";
import CityList from "../components/cityList/CityList";
import DayInfo from "../components/dayInfo/DayInfo";
import SearchForm from "../components/searchForm/SearchForm";
import WeatherDetails from "../components/weatherDetails/WeatherDetails";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
// import Titlebar from "../components/titlebar/Titlebar";
import Loader from "../components/loader/Loader";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

function App() {
  const [city, setCityName] = useState('London');
  const [weather, setWeather] = useState()

  return (
    <main className={`app ${weather}`}>
      {/* <Titlebar/> */}
      <div className="app__inner">
        <div className="left-side">
          <div className="logo"></div>
          
          <ErrorBoundary>
            <WeatherInfo city={city} setWeather={setWeather}/>
          </ErrorBoundary>

          <ErrorBoundary>
            <DayInfo city={city} setWeather={setWeather}/>
          </ErrorBoundary>
        </div>
        <div className="right-side">
          <div className="overlay"></div>
          <SearchForm changeCity={setCityName}/>

          <CityList changeCity={setCityName}/>

          <div className="separator"></div>

          <ErrorBoundary>
            <WeatherDetails />
          </ErrorBoundary>

          <div className="separator"></div>
          <ErrorBoundary>
            <WeekForecast city={city}/>
          </ErrorBoundary>
        </div>
      </div>
      
    </main>
  );
}

export default App;

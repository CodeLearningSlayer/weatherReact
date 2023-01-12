import "./App.css";
import WeekForecast from "../components/weekForecast/WeekForecast";
import CityList from "../components/cityList/CityList";
import DayInfo from "../components/dayInfo/DayInfo";
import SearchForm from "../components/searchForm/SearchForm";
import WeatherDetails from "../components/weatherDetails/WeatherDetails";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import Titlebar from "../components/titlebar/Titlebar";

function App() {
  return (
    <main className="app">
      <Titlebar/>
      <div className="app__inner">
        <div className="left-side">
          <div className="logo"></div>
          <WeatherInfo />
          <DayInfo />
        </div>
        <div className="right-side">
          <div className="overlay"></div>
          <SearchForm />
          <CityList />

          <div className="separator"></div>

          <WeatherDetails />

          <div className="separator"></div>

          <WeekForecast/>
        </div>
      </div>
      
    </main>
  );
}

export default App;

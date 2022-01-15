import React, {useState} from "react";
import axios from "axios";



function WeatherByMinutes(props) {

    const API = "d3a80f64f84bd3b83c586ae67378b484"
    const [weather, setWeather] = useState([])
    axios.defaults.params = {
        'lat': props.coord.lat,
        'lon': props.coord.lon,
        'appid': API
    };

    axios.get(`https://api.openweathermap.org/data/2.5/onecall?exclude=alerts`).then(result => {
        setWeather(result.data)
    });

    return (
            <div>
                <h2>Погода поминутно на час</h2>

                {weather.minutely}
                <h2>Погода на два дня</h2>
                {weather1.hourly}
                <h2>Погода на неделю</h2>
                {weather1.daily}

            </div>
    );
}


export default WeatherByMinutes;
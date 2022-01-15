import React, {useState} from "react";

import axios from "axios";
import "../styles/WeatherByCity.css";
import WeatherByMinutes from "./WeatherByMinutes";



function WeatherByCity() {
    const API = "d3a80f64f84bd3b83c586ae67378b484"

    // изменение города в поле ввода
    const [city, setCity] = useState('');

    // действия с данными погоды
    const [weather, setWeather] = useState({});


    axios.defaults.params = {
        'q': city,
        'appid': API,
    };

      // обработчик, который срабатывает когда нажата клавиша Enter
    const search = evt => {
        if (evt.key === 'Enter') {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric`)
                .then(result => {         // работаем с результатом
                    setWeather(result.data);
                    setCity('');  // освобождаем поле поиска
                });
        }
    }

      // форматирование даты
    const format_date = (d) => {
        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <>

        <div>
            <main>
                <div className='search-box'>
                    <input
                        type='text'
                        className='search-bar'
                        placeholder='Погода по городу...'
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != 'undefined') ? (
                    <div>
                        <div className='location-box'>
                            <div className='location'>{weather.name}, {weather.sys.country}</div>
                            <div className='date'>{format_date(new Date())}</div>
                        </div>
                        <div className='weather-box'>
                            <div className='temp'>
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className='weather'>{weather.weather[0].main}</div>
                        </div>
                        < WeatherByMinutes coord={weather.coord}/>
                    </div>

                ) : ('')}

            </main>
        </div>

        </>
    );
}

export default WeatherByCity;

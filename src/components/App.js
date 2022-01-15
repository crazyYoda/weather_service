import React from "react";

import "../styles/App.css"
import Header from "./Header";
import WeatherByCity from "./WeatherByCity"

function App() {
        return (
                <>
                    <Header/>
                    <WeatherByCity/>
                </>
        );
}

export default App;
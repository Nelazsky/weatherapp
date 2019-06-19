import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";


const API_KEY = "7de792b0a2354f9bcf432a48e4a2b4fe";

class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;

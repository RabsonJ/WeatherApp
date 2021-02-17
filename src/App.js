import axios from 'axios';
import React, { Component } from 'react';
import Map from './components/Map';
import WeatherCard from './components/WeatherCard';
import './App.css'
import WeatherDetail from './components/WeatherDetail';
class App extends Component {
	state = { weather: {} };

	componentDidMount = async () => {
		const key = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Casablanca&units=metric&appid=${key}`
			);
         console.log(data);
         this.setState({weather: data})
		} catch (err) {
			console.log(err);
				console.log(process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY);

		}
	};

   render() {
		return (
			<div className="container">
				<WeatherCard weatherData={this.state.weather} />
				<WeatherDetail weatherData={this.state.weather} />
				<Map weatherData={this.state.weather} />
			</div>
		);
	}
}

export default App;

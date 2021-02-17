import React, { Component } from 'react';
import openWeatherMap from './apis/openWeatherMap';
import './App.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetail from './components/WeatherDetail';
class App extends Component {
	state = { weather: {}, coords: { lat: -17.8419, lon: 25.8543 } };

	componentDidMount = async (params) => {
		this.getWeather({ lat: -17.8419, lon: 25.8543 });
	}

	getWeather = async (params) => {
		try {
			const { data } = await openWeatherMap.get('/weather', { params });
			console.log(data);
			this.setState({ weather: data });
		} catch (err) {
			console.log(err);
		}
	};

	onSubmit = (term) => {
		this.getWeather({ q: term });
	};

	render() {
		return (
			<div className="container">
				<SearchBar onSubmit={this.onSubmit} />
				<WeatherCard weatherData={this.state.weather} />
				<WeatherDetail weatherData={this.state.weather} />
				<Map weatherData={this.state.weather} />
			</div>
		);
	}
}

export default App;

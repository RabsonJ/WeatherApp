import React, { Component } from 'react';
import openWeatherMap from './apis/openWeatherMap';
import './App.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetail from './components/WeatherDetail';
import ErrorMessage from './components/ErrorMessage';
class App extends Component {
	state = { weather: {}, errorMessage: ''};

	componentDidMount = async () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				this.getWeather({ lat: latitude, lon: longitude });
			},
			(err) => {
				this.setState({errorMessage: err.message})
				throw err;
			}
		);
	};

	getWeather = async (params) => {
		try {
			const { data } = await openWeatherMap.get('/weather', { params });
			this.setState({ weather: data });
		} catch (err) {
			this.setState({errorMessage: 'An error occurred while getting the weather'})
			throw err;
		}
	};

	onSubmit = (term) => {
		this.getWeather({ q: term });
	};

	render() {
		if (this.state.errorMessage) {
			return <ErrorMessage errorMessage={this.state.errorMessage} />
		}
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

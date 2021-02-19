import React, { Component } from 'react';
import openWeatherMap from './apis/openWeatherMap';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetail from './components/WeatherDetail';
class App extends Component {
	state = { weather: {}, errorMessage: '', coords: { lat: null, lon: null } };

	componentDidMount = async () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				this.setState({ coords: { lat: latitude, lon: longitude } });
				this.getWeather({
					lat: this.state.coords.lat,
					lon: this.state.coords.lon,
				});
			},
			(err) => {
				this.setState({ errorMessage: err.message });
				throw err;
			}
		);
	};

	getWeather = async (params) => {
		try {
			const { data } = await openWeatherMap.get('/weather', { params });
			this.setState({
				weather: data,
				coords: { lat: data.coord.lat, lon: data.coord.lon },
			});
		} catch (err) {
			this.setState({
				errorMessage: 'An error occurred while getting the weather',
			});
			throw err;
		}
	};

	onSubmit = (term) => {
		this.getWeather({ q: term });
	};

	render() {
		if (this.state.errorMessage) {
			return <ErrorMessage errorMessage={this.state.errorMessage} />;
		}
		return (
			<div className="container">
				<SearchBar onSubmit={this.onSubmit} />
				<WeatherCard weatherData={this.state.weather} />
				<WeatherDetail weatherData={this.state.weather} />
				<Map weatherData={this.state.weather} coords={this.state.coords} />
			</div>
		);
	}
}

export default App;

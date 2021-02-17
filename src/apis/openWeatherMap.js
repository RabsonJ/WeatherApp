import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
	params: {
		appid: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
		units: 'metric',
	},
});

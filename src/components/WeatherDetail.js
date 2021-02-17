import './WeatherDetail.css';

const WeatherDetail = ({ weatherData }) => {
	if (!weatherData.main?.temp) {
		return '';
	}
	const { main, wind } = weatherData;
	return (
		<div className="grid">
			<div className="card-1">
				<p>Humidity (%)</p>
				<h3 className="display-2">{main.humidity}</h3>
			</div>
			<div className="card-2">
				<p>Wind: Speed (meter/sec)</p>
				<h3 className="display-2">{wind.speed.toFixed(1)}</h3>
			</div>
			<div className="card-3">
				<p>Max Temp. (°C)</p>
				<h3 className="display-2">{main.temp_max.toFixed(1)}</h3>
			</div>
			<div className="card-4">
				<p>Min Temp. (°C)</p>
				<h3 className="display-2">{main.temp_min.toFixed(1)}</h3>
			</div>
		</div>
	);
};

export default WeatherDetail;

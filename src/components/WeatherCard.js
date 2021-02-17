import Spinner from './Spinner';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
	if (!weatherData.main?.temp) {
		return <Spinner message="Getting weather..." />;
	}
	const options = {
		weekday: 'short',
		month: 'long',
		day: 'numeric',
	};
   const date = new Intl.DateTimeFormat('en-US', options).format(new Date());
   
   const { main, weather, name } = weatherData;
	return (
		<div className="card">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column">
						<h2 className="card-title display-2">
							{main.temp.toFixed(1)}&deg;C
						</h2>
						<small className="text-muted">{date}</small>
					</div>
					<img
						src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
						alt="weather icon"
					/>
				</div>
				<p className="my-5">
					Description: <strong>{weather[0].description}</strong>
				</p>
			</div>
			<div className="card-footer text-muted text-center">{name}</div>
		</div>
	);
};

export default WeatherCard;

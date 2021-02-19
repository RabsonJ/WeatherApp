import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({ weatherData, coords }) => {
   if (!coords.lat) {
			return '';
		}

   const { lat, lon } = coords;
	return (
		<MapContainer
			center={[lat, lon]}
			zoom={13}
			scrollWheelZoom={false}
			closePopupOnClick={false}
			style={{ height: '400px' }}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[lat, lon]}>
				<Popup autoClose={false}>
					<h3>{weatherData.name}</h3>
					<br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;

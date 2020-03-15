import React from "react";
import mapboxgl from "mapbox-gl";

import "./mapcontainer.styles.scss";

mapboxgl.accessToken =
	"pk.eyJ1IjoiZ2V0aHJpYyIsImEiOiJjazdleXlmdXAwMGczM2xta243eWhibjU4In0.F4icvwd-09Cqes4HvB9ODQ";

class MapContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.createMapContainer = this.createMapContainer.bind(this);
		this.addMarkers = this.addMarkers.bind(this);
	}

	createMapContainer = () => {
		return new mapboxgl.Map({
			container: this.mapContainer,
			style: "mapbox://styles/mapbox/streets-v11"
		});
	};

	addMarkers = () => {
		return new mapboxgl.Marker();
	};

	componentDidMount() {
		const map = this.createMapContainer();

		map.on("move", () => {
			this.setState({
				longitude: map.getCenter().lng.toFixed(4),
				latitude: map.getCenter().lat.toFixed(4),
				zoom: map.getZoom().toFixed(2)
			});
		});

		const geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: false
		});

		map.addControl(geolocate);

		map.on("load", function() {
			geolocate.trigger();
		});
	}

	componentDidUpdate() {
		console.log(this.mapContainer);
		/* const venues = this.props.venues;
		const marker = this.addMarkers();
		console.log(this.props);

		venues.map(obj =>
			marker
				.setLngLat([
					JSON.stringify(obj.location.lng),
					JSON.stringify(obj.location.lat)
				])
				.addTo(this.map)
		); */
	}

	render() {
		return (
			<div>
				<div className="sidebarStyle">
					<div>
						Longitude: {this.state.longitude} | Latitude: {this.state.latitude}{" "}
						| Zoom: {this.state.zoom}
					</div>
				</div>
				<div className="mapContainer" ref={el => (this.mapContainer = el)} />
			</div>
		);
	}
}

export default MapContainer;

import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import placeholder from "./images/placeholder.svg";
import "./reactmapcontainer.styles.scss";

const ReactMapContainer = props => {
	console.log(props);
	const viewport = {
		width: props.props.viewport.width,
		height: props.props.viewport.height,
		latitude: props.props.coords.latitude,
		longitude: props.props.coords.longitude,
		zoom: props.props.viewport.zoom
	};
	return (
		<div className="react-map-container">
			<ReactMapGL
				{...viewport}
				mapstyle="mapbox://styles/mapbox/outdoors-v11"
				mapboxApiAccessToken="pk.eyJ1IjoiZ2V0aHJpYyIsImEiOiJjazdleXlmdXAwMGczM2xta243eWhibjU4In0.F4icvwd-09Cqes4HvB9ODQ"
			>
				{props.props.venues.map(obj => (
					<Marker
						key={obj.id}
						latitude={obj.location.lat}
						longitude={obj.location.lng}
					>
						<div className="mark">
							<img src={placeholder} alt="Placeholder" />
						</div>
					</Marker>
				))}
			</ReactMapGL>
		</div>
	);
};

export default ReactMapContainer;

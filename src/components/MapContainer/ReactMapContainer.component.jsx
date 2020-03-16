import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import placeholder from "./images/placeholder.svg";
import home from "./images/home.svg";
import "./reactmapcontainer.styles.scss";

const ReactMapContainer = props => {
	console.log(props);
	const [viewport, setViewport] = useState({
		width: props.props.viewport.width,
		height: props.props.viewport.height,
		latitude: props.props.coords.latitude,
		longitude: props.props.coords.longitude,
		zoom: props.props.viewport.zoom
	});

	return (
		<div className="react-map-container">
			<ReactMapGL
				{...viewport}
				onViewportChange={setViewport}
				mapstyle="mapbox://styles/mapbox/outdoors-v11"
				mapboxApiAccessToken="pk.eyJ1IjoiZ2V0aHJpYyIsImEiOiJjazdleXlmdXAwMGczM2xta243eWhibjU4In0.F4icvwd-09Cqes4HvB9ODQ"
			>
				<Marker
					key="Home"
					latitude={props.props.coords.latitude}
					longitude={props.props.coords.longitude}
					offsetTop={-25}
					offsetLeft={-12.5}
				>
					<div className="mark">
						<img src={home} alt="Placeholder" />
					</div>
				</Marker>

				{props.props.venues.map(obj => (
					<Marker
						key={obj.id}
						latitude={obj.location.lat}
						longitude={obj.location.lng}
						offsetTop={-25}
						offsetLeft={-12.5}
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

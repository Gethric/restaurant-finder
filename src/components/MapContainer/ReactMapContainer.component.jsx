import React from "react";
import ReactMapGL from "react-map-gl";

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
			></ReactMapGL>
		</div>
	);
};

export default ReactMapContainer;

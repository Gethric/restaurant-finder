import React from "react";
import "./App.css";
import Search from "./components/Search/Search.component";
import List from "./components/List/List.component";
import ReactMapContainer from "./components/MapContainer/ReactMapContainer.component";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			venues: [],
			viewport: {
				width: "65vw",
				height: "100vh",
				zoom: 12
			}
		};

		this.getLocation = this.getLocation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	getLocation = () => {
		return new Promise(function(resolve, reject) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	};

	handleChange = event => {
		const target = event.target;
		const value = target.value;
		const search = target.name;
		this.setState({ [search]: value });
	};

	onClick = event => {
		event.preventDefault();
		const id = "JDYP4JZ2UN4HQQHVPY4AYPMXNP4OPKJOETES0M0LLCE3EQ5V";
		const secret = "PZTEZQURLCAUBBUE0LLNSMFDXO2TLT3RDSW1H0TAKUMOSRLB";
		const lat = this.state.coords.latitude;
		const lon = this.state.coords.longitude;

		if (this.state.search) {
			fetch(
				`https://api.foursquare.com/v2/venues/search?client_id=${id}&client_secret=${secret}&v=20180323&limit=10&ll=${lat},${lon}&query=${this.state.search}`
			)
				.then(res => res.json())
				.then(data => {
					this.setState({
						venues: data.response.venues
					});
				})
				.catch(console.log);
		} else {
			alert("Your search is empty!");
		}
	};

	componentDidMount() {
		this.getLocation()
			.then(data => {
				this.setState({
					coords: data.coords
				});
			})
			.catch(console.log);
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<div className="screen-left">
					<Search
						handleChange={this.handleChange}
						onClick={this.onClick}
						state={this.state}
					/>
					{this.state.venues.length ? (
						<List venues={this.state.venues} />
					) : null}
				</div>
				<div className="screen-right">
					{this.state.coords ? <ReactMapContainer props={this.state} /> : null}
				</div>
			</div>
		);
	}
}

export default App;

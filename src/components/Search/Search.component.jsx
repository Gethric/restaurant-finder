import React from "react";
import "./search.styles.scss";

const Search = props => {
	return (
		<div className="search">
			<div className="text-input">
				<input
					type="text"
					name="search"
					placeholder="Search for type of food you fancy"
					value={props.state.name}
					onChange={props.handleChange}
				/>
			</div>
			<div className="search-button">
				<button onClick={props.onClick}>GO!</button>
			</div>
		</div>
	);
};

export default Search;

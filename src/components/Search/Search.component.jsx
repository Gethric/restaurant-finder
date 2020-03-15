import React from "react";

const Search = props => {
	return (
		<div className="search">
			<input
				type="text"
				name="search"
				placeholder="Find food!"
				value={props.state.name}
				onChange={props.handleChange}
			/>

			<button onClick={props.onClick}>Click me!</button>
		</div>
	);
};

export default Search;

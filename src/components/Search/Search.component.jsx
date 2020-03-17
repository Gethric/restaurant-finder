import React from "react";
import "./search.styles.scss";

const Search = props => {
	return (
		<div className="search">
			<div className="tb">
				<div className="td">
					<input
						type="text"
						name="search"
						placeholder="Find food!"
						value={props.state.name}
						onChange={props.handleChange}
					/>
				</div>
				<div className="td" id="s-cover">
					<button onClick={props.onClick}>
						<div id="s-circle"></div>
						<span></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Search;

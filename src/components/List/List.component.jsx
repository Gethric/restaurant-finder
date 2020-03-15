import React from "react";
import Item from "../Item/Item.component";

const List = props => {
	const venues = props.venues;
	return (
		<div className="list">
			{venues.map(item => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};

export default List;

import React from "react";
import "./item.styles.scss";

const Item = props => {
	const item = props.item;
	return (
		<div className="item">
			{item.name ? (
				<div className="item_name">
					<h2 className="name">{item.name}</h2>
				</div>
			) : null}

			{item.location.address ? (
				<div className="item_location">
					<span className="location">{item.location.address}</span>
				</div>
			) : null}

			{item.contact.length ? (
				<div className="item_contact">
					<span className="contact"></span>
				</div>
			) : null}
		</div>
	);
};

export default Item;

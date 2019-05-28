import React from "react";

const Detail = ({ img, title, description }) => {
	return (
		<div>
			<img src={img} alt={title} />
			<p className="text-md">{title}</p>
			<p className="text-dark">{description}</p>
		</div>
	);
};

export default Detail;

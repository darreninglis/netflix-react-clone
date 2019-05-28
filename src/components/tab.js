import React from "react";

const Tab = ({ id, isActive, onClick, icon, text }) => {
	return (
		<div
			id={id}
			isActive={isActive}
			className={isActive ? "tab-item tab-border" : "tab-item"}
			onClick={onClick}>
			<i className={icon} />
			<p className="hide-sm">{text}</p>
		</div>
	);
};
export default Tab;

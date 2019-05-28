import React from "react";
import logo from "../img/logo.png";

const Showcase = () => {
	return (
		<div>
			<header className="showcase">
				<div className="showcase-top">
					<img src={logo} alt="Netflix" />
					<a className="btn btn-rounded">Sign In</a>
				</div>
				<div className="showcase-content">
					<h1>See what's next</h1>
					<p>Watch anywhere. Cancel at Any time.</p>
					<a href="#" className="btn btn-xl">
						Try 30 Days free
						<i className="fas fa-chevron-right btn-icon chevron" />
					</a>
				</div>
			</header>
		</div>
	);
};

export default Showcase;

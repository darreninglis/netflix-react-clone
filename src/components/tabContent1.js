import React from "react";
import imgTab from "../img/tab-content-1.png";

const TabContent1 = ({ show }) => {
	return (
		<div>
			<section className="tab-content">
				<div className="container">
					<div
						id="tab-1-content"
						className={show ? "tab-content-item show" : ""}>
						<div className="tab-1-content-inner">
							<div>
								<p className="text-lg">
									If you decide Netflix isn't for you - no problem. No
									commitment. Cancel online anytime.
								</p>
								<a className="btn btn-lg">Try 30 Days Free</a>
							</div>
							<img src={imgTab} alt="tab-content-1" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TabContent1;

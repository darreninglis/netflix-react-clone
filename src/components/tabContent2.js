import React from "react";
import tab2img1 from "../img/tab-content-2-1.png";
import tab2img2 from "../img/tab-content-2-2.png";
import tab2img3 from "../img/tab-content-2-3.png";
import Detail from "./detail";

const TabContent2 = ({ show }) => {
	return (
		<div>
			<section className="tab-content">
				<div className="container">
					<div
						id="tab-2-content"
						className={show ? "tab-content-item show" : ""}>
						<div className="tab-2-content-top">
							<p className="text-lg">
								Watch TV shows and movies anytime, anywhere - personalized for
								you.
							</p>
							<a className="btn btn-lg">Watch Free For 30 Days</a>
						</div>
						<div className="tab-2-content-bottom">
							<Detail
								img={tab2img1}
								title="Watch on your TV"
								description="Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
										players and more."
							/>
							<Detail
								img={tab2img2}
								title="Watch instantly or download for later."
								description="Available on phone and tablet, wherever you go."
							/>
							<Detail
								img={tab2img3}
								title="Use any computer"
								description="Watch right on Netflix.com"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TabContent2;

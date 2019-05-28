import React, { Component } from "react";
import TabContent1 from "./tabContent1";
import TabContent2 from "./tabContent2";
import TabContent3 from "./tabContent3";
import Tab from "./tab";

export default class TabContainer extends Component {
	state = {
		firstActive: true,
		secondActive: false,
		thirdActive: false,
	};

	setFirstActive = e => {
		this.setState({
			firstActive: true,
			secondActive: false,
			thirdActive: false,
		});
	};

	setSecondActive = e => {
		this.setState({
			firstActive: false,
			secondActive: true,
			thirdActive: false,
		});
	};

	setThirdActive = e => {
		this.setState({
			firstActive: false,
			secondActive: false,
			thirdActive: true,
		});
	};

	render() {
		return (
			<div>
				<section className="tabs">
					<div className="container">
						<Tab
							id="tab-1"
							icon="fas fa-door-open fa-3x"
							text="Cancel anytime"
							isActive={this.state.firstActive}
							onClick={() => this.setFirstActive()}
						/>
						<Tab
							id="tab-2"
							icon="fas fa-tablet-alt fa-3x"
							text="Watch anywhere"
							isActive={this.state.secondActive}
							onClick={() => this.setSecondActive()}
						/>
						<Tab
							id="tab-3"
							icon="fas fa-tags fa-3x"
							text="Pick your price"
							isActive={this.state.thirdActive}
							onClick={() => this.setThirdActive()}
						/>
					</div>
				</section>
				<TabContent1 show={this.state.firstActive} />
				<TabContent2 show={this.state.secondActive} />
				<TabContent3 show={this.state.thirdActive} />
			</div>
		);
	}
}

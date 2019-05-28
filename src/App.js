import React, { Component } from "react";
import "./App.css";
import Showcase from "./components/showcase";
import TabContainer from "./components/tabContainer";

import Footer from "./components/footer";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Showcase />
				<TabContainer />
				<Footer />
			</div>
		);
	}
}

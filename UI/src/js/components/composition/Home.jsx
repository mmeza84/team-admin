"use strict";

import React, { Component } from "react";


import SiteTitle from '../presentation/SiteTitle';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Home"
		};
	}

	render() {
		return (
			<div class="home-wrapper">
				<SiteTitle
					{...this.state}
				/>
				<p>Team management app - stay in touch with each other and keep up to date with your schedule.</p>
				<p>Team management app - stay in touch with each other and keep up to date with your schedule.</p>
				<p>Team management app - stay in touch with each other and keep up to date with your schedule.</p>
				<p>Team management app - stay in touch with each other and keep up to date with your schedule.</p>
			</div>
		);
	}
};

export default Home;

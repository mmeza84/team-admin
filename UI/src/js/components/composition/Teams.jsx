"use strict";

import React, { Component } from "react";

import SiteTitle from "../presentation/SiteTitle";

class Teams extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Teams"
		};
	}

	render() {
		return (
			<SiteTitle
				{...this.state}
			/>
		);
	}
};

export default Teams;

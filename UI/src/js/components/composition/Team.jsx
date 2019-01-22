"use strict";

import React, { Component } from "react";

import SiteTitle from "../presentation/SiteTitle";
import TextInput from "../presentation/TextInput";

class Team extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Team"
		};
	}

	render() {
		console.log("this.props", this.props);
		return (
			<div>
				<SiteTitle
					{...this.state}
				/>
				<TextInput 
					className="sample-class"
					onChangeCallback={(event) => { console.log("On change."); }}
					onBlurCallback={(event) => { console.log("On blur."); }}
				/>
			</div>
		);
	}
};

export default Team;

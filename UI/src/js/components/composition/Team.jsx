"use strict";

import React, { Component } from "react";

import Person from "../presentation/Person";
import SiteTitle from "../presentation/SiteTitle";
import TextInput from "../presentation/TextInput";

import People from "../../sampleData/people.js";

class Team extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Sao Paulo FC"
		};
	}

	componentDidMount() {
		// load sample player data
		this.setState({
			people: People
		});
	}

	render() {
		console.log("this.props", this.props);
		console.log("this.state", this.state);

		return (
			<div>
				<SiteTitle
					{...this.state}
				/>
				{this.state.people && 
					this.state.people.map(eachPerson => {
						return (
							<Person 
								{...eachPerson}
							/>
						)
					})
				}
			</div>
		);
	}
};

export default Team;

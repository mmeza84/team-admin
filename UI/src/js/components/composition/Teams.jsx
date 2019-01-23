"use strict";

import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Team from "../composition/Team";

import SiteTitle from "../presentation/SiteTitle";
import TeamSearchResult from "../presentation/TeamSearchResult";
import TextInput from "../presentation/TextInput";

import TeamData from "../../sampleData/teams";

class Teams extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Teams"
		};
	}

	componentDidMount() {
		this.setState({
			teams: TeamData
		});
	}

	render() {
		var { match } = this.props;
		return (
			<div>
				<SiteTitle
					{...this.state}
				/>
				{this.state.teams &&
					this.state.teams.map(eachTeam => {
						return (
							<TeamSearchResult {...eachTeam} />
						)
					})
				}
			</div>
		);
	}
};

export default Teams;

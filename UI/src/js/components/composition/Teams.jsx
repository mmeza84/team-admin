"use strict";

import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Team from "../composition/Team";

import SiteTitle from "../presentation/SiteTitle";
import TextInput from "../presentation/TextInput";

class Teams extends Component {
	constructor() {
		super();

		this.state = {
			pageTitle: "Teams"
		};
	}

	render() {
		var { match } = this.props;
		return (
			<div>
				<SiteTitle
					{...this.state}
				/>
				<p>Team switch</p>
				<Link to="teams/newTeamName">New Team</Link>
				<Switch>
					<Route exact path="/a" render={() => <div>Testing</div>} />
					<Route path={`${match.path}/:teamName`} component={Team} />
				</Switch>
			</div>
		);
	}
};

export default Teams;

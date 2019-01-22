"use strict";

import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Home from "./components/composition/Home";
import Team from "./components/composition/Team";
import Teams from "./components/composition/Teams";

const AppRouter = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/teams">Teams</NavLink></li>
				</ul>
			</nav>
			<div className="main-content">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/teams/:teamName" component={Team} />
					<Route path="/teams" component={Teams} />
				</Switch>
			</div>
		</div>
	</Router>
);

export default AppRouter;
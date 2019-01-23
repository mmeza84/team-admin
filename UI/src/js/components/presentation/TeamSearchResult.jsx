"use strict";

import React from "react";
import { Link } from "react-router-dom";

const TeamSearchResult = ({ name }) => (
	<div className="team-search-result">
		<Link to={`/teams/${_.kebabCase(name)}`}>{name}</Link>
	</div>
);

export default TeamSearchResult;
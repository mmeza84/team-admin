"use strict";

import React from "react";

const Person = ({ name, email, phone, isPlayer }) => (
	<div className="team-person">
		<div>
			<span class="team-person-title">Name:</span>&nbsp;
			{name}
		</div>
		{email && 
			<div>
				<span class="team-person-title">Email:</span>&nbsp;
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		}
		{phone && 
			<div>
				<span class="team-person-title">Phone:</span>&nbsp;
				<a href={`tel:${phone}`}>{phone}</a>
			</div>
		}
	</div>
);

export default Person;
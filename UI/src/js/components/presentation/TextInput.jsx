"use strict";

import React from "react";

const TextInput = ({ className, defaultValue, onChangeCallback, onBlurCallback }) => (
	<input
		type="text"
		className={className}
		onChange={onChangeCallback}
		onBlur={onBlurCallback}
	/>
);

TextInput.defaultProps = {
	onChangeCallback: () => {},
	onBlurCallback: () => {}
};

export default TextInput;
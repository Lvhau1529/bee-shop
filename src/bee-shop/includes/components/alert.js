import React from "react";
import { Alert } from "antd";

function AlertFunction(props) {
	return (
		<Alert
			style={{ display: props.hidden }}
			message={props.message || "Error"}
			description={props.description || "Don't have description"}
			type={props.type || "error"}
			showIcon
			closable
		/>
	);
}

export default React.memo(AlertFunction);

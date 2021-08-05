import React from "react";
import { Alert } from "antd";

function AlertFunction(props) {
	return (
		<Alert
			style={{ display: props.hidden }}
			message={props.message || "Lỗi"}
			description={props.description || "Không có miêu tả"}
			type={props.type || "error"}
			showIcon
			closable
		/>
	);
}

export default React.memo(AlertFunction);

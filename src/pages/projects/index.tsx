import { ProjectUI } from "features";
import React from "react";

const Project = () => {
	return (
		<div>
			<ProjectUI
				projectClicked={undefined}
				setProjectClicked={() => {
					console.log("clicked");
				}}
			/>
		</div>
	);
};

export { Project };

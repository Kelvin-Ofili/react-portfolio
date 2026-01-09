import { ProjectUI } from "features";
import React, { useState } from "react";

const Project = () => {
	const [projectClicked, setProjectClicked] = useState<number | undefined>(undefined);
	
	return (
		<div>
			<ProjectUI
				projectClicked={projectClicked}
				setProjectClicked={setProjectClicked}
			/>
		</div>
	);
};

export { Project };

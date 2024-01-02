import { DynamicFile } from "./DynamicFile";

// const dynamicFile = new DynamicFile('src/components/Nav.tsx');
// const marker = '</ul>';
// const stringBlockToAdd = `\t\t\t<li><NavLink to="/test002">Test002</NavLink></li>`;
// dynamicFile.addStringBlockBeforeMarker(marker, stringBlockToAdd);
// console.log(dynamicFile.debug());

const dynamicFile = new DynamicFile('src/main.tsx');
const marker = 'MARKER::NEW_PAGE';
const stringBlockToAdd = `			{
				path: "Test004",
				element: <PageTest004 />,
			},`;
dynamicFile.addStringBlockBeforeMarker(marker, stringBlockToAdd);
console.log(dynamicFile.debug());

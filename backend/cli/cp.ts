import { PageManager } from "./PageManager";
import * as tools from "./tools";

const pageIdCode = tools.getArgument();

try {
	const pageManager = new PageManager(pageIdCode);
	pageManager.createPage();
}
catch (e) {
	console.log(`
Please specify a page name in pascal notation.
e.g. "npm run cp QuarterlyReports"
`.trim());
}



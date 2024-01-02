import { DynamicFile } from './DynamicFile';
import * as tools from './tools';

export class PageManager {
	private pascalNotationIdCode = '';
	private fileName = '';
	private camelCaseNotationIdCode = '';

	constructor(idCode: string) {
		if (!idCode) {
			throw Error("invalid idCode");
		}

		this.pascalNotationIdCode = tools.capitalizeFirstCharacter(idCode);
		this.camelCaseNotationIdCode = this.pascalNotationIdCode.toLowerCase();
		this.fileName = `Page${idCode}.tsx`;
	}

	public createPage() {
		this.createPageFile();
		this.updateNavFile();
		this.updateMainFile();
	}

	private createPageFile() {
		tools.createFile(`src/pages/${this.fileName}`, `
export const Page${this.pascalNotationIdCode} = () => {
	return (
		<p>This is the ${this.pascalNotationIdCode} page.</p>
	)
}
`);
	}

	private updateMainFile() {
		const dynamicFile = new DynamicFile('src/main.tsx');
		dynamicFile.addStringBlockBeforeMarker('MARKER::IMPORT_NEW_PAGE', `import { Page${this.pascalNotationIdCode} } from "./pages/Page${this.pascalNotationIdCode}.tsx";`);
		dynamicFile.addStringBlockBeforeMarker('MARKER::NEW_PAGE', `			{
				path: "${this.camelCaseNotationIdCode}",
				element: <Page${this.pascalNotationIdCode} />,
			},`);
		dynamicFile.save();
	}

	private updateNavFile() {
		const dynamicFile = new DynamicFile('src/components/Nav.tsx');
		const marker = '</ul>';
		const stringBlockToAdd = `\t\t\t<li><NavLink to="/${this.camelCaseNotationIdCode}">${this.pascalNotationIdCode}</NavLink></li>`;
		dynamicFile.addStringBlockBeforeMarker(marker, stringBlockToAdd);
		dynamicFile.save();
	}
}
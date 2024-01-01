import * as tools from './tools';

export class PageManager {
	private idCode = '';
	private fileName = '';

	constructor(idCode: string) {
		if (!idCode) {
			throw Error("invalid idCode");
		}

		this.idCode = tools.capitalizeFirstCharacter(idCode);
		this.fileName = `Page${idCode}.tsx`;
	}

	public createPage() {
		tools.createFile(`src/pages/${this.fileName}`, `
export const Page${this.idCode} = () => {
	return (
		<p>This is the ${this.idCode} page.</p>
	)
}
`);
	}
}
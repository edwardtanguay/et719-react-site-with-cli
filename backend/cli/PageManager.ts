import * as tools from './tools';

export class PageManager {
	private idCode = '';

	constructor(idCode:string) {
		this.idCode = tools.capitalizeFirstCharacter(idCode);
	}

	public getIdCode() {
		return this.idCode;
	}
}
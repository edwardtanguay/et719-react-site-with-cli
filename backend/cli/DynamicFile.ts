import * as tools from './tools';

export class DynamicFile {
	private pathAndFileName = '';
	private content = '';
	private lines: string[] = [];

	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
		this.content = tools.readContentFromFile(this.pathAndFileName);
		this.createLines();
	}

	private createLines() {
		this.lines = tools.convertStringBlockToLines(this.content);
	}

	public debug() {
		return `
FILENAME: ${this.pathAndFileName}
Number of lines: ${this.lines.length}
======================================
${this.content}
======================================`.trim();
	}
}
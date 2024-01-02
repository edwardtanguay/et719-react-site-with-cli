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

	public addStringBlockBeforeMarker(marker: string, stringBlock: string) {
		const stringBlockLines = tools.convertStringBlockToLines(stringBlock);
		const newLines: string[] = [];
		for (const line of this.lines) {
			if (line.includes(marker)) {
				for (const stringBlockLine of stringBlockLines) {
					newLines.push(stringBlockLine);
				}
			}
			newLines.push(line);
		}
		this.lines = newLines;
	}

	private getContentFromLines() {
		return this.lines.join('\n');
	}

	public debug() {
		return `
FILENAME: ${this.pathAndFileName}
Number of lines: ${this.lines.length}
======================================
${this.getContentFromLines()}
======================================`.trim();
	}
}
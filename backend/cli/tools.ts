import fs from 'fs';

/**
 * Creates a file with content
 * 
 * qfil.createFile('src/data/infos.json', '[]');
 * 
 * (file is created)
 */
export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

export const getArgument = (index = 0) => {
	return process.argv[index + 2];
}

export const capitalizeFirstCharacter = (text: string) => {
	return text[0].toUpperCase() + text.slice(1);
}

export const readContentFromFile = (pathAndFileName: string) => {
	return fs.readFileSync(pathAndFileName, { encoding: 'utf8', flag: 'r' });
};

export const convertStringBlockToLines = (stringBlock: string) => {
	const lines = stringBlock.split('\n');
	return lines;
}

export const writeFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

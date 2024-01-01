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

import * as tools from "./tools";

const pageIdCode = tools.getArgument();

const pageFileName = `Page${pageIdCode}.tsx`;

tools.createFile(`src/pages/${pageFileName}`, 'test');


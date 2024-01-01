import { getArgument } from "./tools";

const pageIdCode = getArgument();

const pageFileName = `Page${pageIdCode}.tsx`;

console.log(`Creating ${pageFileName}...`);

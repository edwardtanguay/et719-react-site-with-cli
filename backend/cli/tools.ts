export const getArgument = (index = 0) => {
	return process.argv[index + 2];
}
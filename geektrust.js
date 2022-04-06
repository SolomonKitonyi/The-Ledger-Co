const fs = require('fs');
const readline = require('readline');
const isValidPath = require('is-valid-path');

const data = [];

//get input file path from commandline
const filePath = process.argv[2];

//validate path
const isValid = isValidPath(filePath);

if (!isValid) {
	throw new Error('Invalid path');
} else if (filePath.length < 1) {
	throw new Error('Path is required');
}

//get input and process it
const readInterface = readline.createInterface({
	input: fs.createReadStream(filePath),
	console: false,
});

readInterface.on('line', function (line) {
	const inputData = line.split(' ');
	const type = inputData[0];
});

const fs = require('fs');
const readline = require('readline');
let fileUrl;

describe('tests file path passed', () => {
	it('should throw error if no path passed', () => {
		expect(fileUrl).toBeUndefined();
	});
	it('should not throw error if path is passed', () => {
		fileUrl = '/home/solomon/Desktop/file.txt';
		expect(fileUrl).toBeDefined();
	});
});

describe('test reading data', () => {
	it('should read correctly given correct path', () => {
		const readInterface = readline.createInterface({
			input: fs.createReadStream('/home/solomon/Desktop/file.txt'),
		});
		readInterface.on('line', function (line) {
			const data = line;
			expect(data).toBeDefined();
		});
	});
	it('should throw error given incorrect path', () => {
		const readInterface = readline.createInterface({
			input: fs.createReadStream(''),
		});
		try {
			readInterface.on('line', function (line) {
				const data = line;
				expect(data).toThrow();
			});
		} catch (error) {
			throw error;
		}
	});
});

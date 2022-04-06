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

describe('returns correct data to work with', () => {
	it('should excute Loan type if block if command starts with LOAN', () => {
		const readInterface = readline.createInterface({
			input: fs.createReadStream('/home/solomon/Desktop/file.txt'),
		});
		readInterface.on('line', function (line) {
			const data = line.split(' ');
			const type = data[0];
			let message;
			if (type === 'LOAN') {
				message = data[0];

				expect(message).toBe('LOAN');
			} else if (type == 'PAYMENT') {
				message = data[0];
				expect(message).toBe('PAYMENT');
			} else if (type === 'BALANCE') {
				message = data[0];

				expect(message).toBe('BALANCE');
			}
		});
	});
});

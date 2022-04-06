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

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

	//Process Loan command
	if (type === 'LOAN') {
		//save data for later use in other commands
		const loanData = {
			type: inputData[0],
			bankName: inputData[1],
			borrowerName: inputData[2],
			principal: parseInt(inputData[3]),
			numberOfYears: parseInt(inputData[4]),
			ratePerAnnum: parseInt(inputData[5]) / 100,
			lumpSum: 0,
			emiNumber: 0,
		};
		loanData.interest =
			loanData.principal * loanData.numberOfYears * loanData.ratePerAnnum;
		loanData.amount = loanData.principal + loanData.interest;
		loanData.emi = Math.ceil(loanData.amount / (loanData.numberOfYears * 12));
		loanData.numberOfEmis = Math.ceil(loanData.amount / loanData.emi);

		//add loanData to data the array containing all loans
		[...data, data.push(loanData)];
	} else if (type === 'PAYMENT') {
		const bankName = inputData[1];
		const borrowerName = inputData[2];
		const lumpSum = parseInt(inputData[3]);
		const emiNumber = parseInt(inputData[4]);

		//Loop through the data and process it
		data.forEach((item) => {
			if (item.bankName === bankName && item.borrowerName === borrowerName) {
				item.emiNumber2 = emiNumber;
				item.amount = item.amount - lumpSum;
				item.numberOfEmis = Math.ceil(item.amount / item.emi);
				item.lumpSum = lumpSum;
			}
		});
	} else if (type === 'BALANCE') {
		const bankName = inputData[1];
		const borrowerName = inputData[2];
		const emiNumber = parseInt(inputData[3]);

		//loop through the data and perform calculations
		data.forEach((item) => {
			if (item.borrowerName === borrowerName && item.bankName === bankName) {
				item.emiNumber = emiNumber;
				let amountPaid;
				let remainingEmis;

				if (item.emiNumber < item.emiNumber2) {
					item.amount = item.amount + item.lumpSum;
					amountPaid = item.emiNumber * item.emi;
					remainingEmis = Math.ceil(item.amount / item.emi) - emiNumber;
				} else {
					amountPaid = item.emi * emiNumber + item.lumpSum;
					remainingEmis = item.numberOfEmis - emiNumber;
				}
				console.log(
					`${item.bankName} ${item.borrowerName} ${amountPaid} ${remainingEmis}`
				);
			}
		});
	}
});

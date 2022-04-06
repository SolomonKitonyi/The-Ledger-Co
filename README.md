# The-Ledger-Co

##### Problem Statement

You work at a startup called The Ledger Co., a marketplace for banks to lend money to borrowers and receive payments for the loans. The interest for the loan is calculated by I = P*N*R where P is the principal amount, N is the number of years and R is the rate of interest. The total amount to repay will be A = P + I The amount should be paid back monthly in the form of EMIs. The borrowers can also pay a lump sum (that is, an amount more than their monthly EMI). In such a case, the lump sum will be deducted from the total amount (A) which can reduce the number of EMIs. This doesn’t affect the EMI amount unless the remaining total amount is less than the EMI. All transactions happen through The Ledger Co. You need to design a system to find out how much amount a user has paid the bank and how many EMIs are remaining.

##### Required Features

Your program should take as input:
1. The bank name, borrower name, principal, interest and term.
2. Lump sum payments if any.
3. Given the bank name, borrower name, and EMI number, the program should print the total amount paid by the user (including the EMI number mentioned) and the remaining number of EMIs.

The output should be
1. Amount paid so far, and number of EMIs remaining for the user with the bank

# How to run the Program
- Clone the repo:
  ```
    $ git clone https://github.com/SolomonKitonyi/The-Ledger-Co
  ```
- Navigate to the cloned folder:
  ```
    $ cd The-Ledger-Co
  ```
- Run:
  `$ npm i`
  - This will install all project dependecies.
- Run the Project
  ```
    $ npm start <file path>
  ```

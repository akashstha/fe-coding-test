# Multi-Accounts

For this next part of the Accounts task, we want you to target `http://localhost:3000/api/multi-accounts` to get the data you need. This endpoint will return the same object, with one key difference. The `accounts` array will now contain different types of accounts. Some accounts will be `BankAccounts` with the same properties as before, but some will be `Loans`.

A `BankAccount` object has the same properties as before:

- `accountNumber` (string): the account number
- `balance` (number): the current balance of the account
- `name` (string): the name of the account

A `Loan` object has the following properties:

- `accountNumber` (string): the account number
- `name` (string): the name of the loan
- `nextPaymentDue` (string): the date the next payment is due
- `paymentAmount` (number): the amount of the next payment

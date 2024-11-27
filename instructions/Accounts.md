# Accounts Task

For this task, you'll be building a simple home screen for a banking portal. It will display a list of the user's bank accounts. You can find the designs to follow in this folder (Accounts.png). Don't worry about getting a pixel perfect match, we're looking to see how you approach this problem and how you write your code.

## Getting the account data

You can get the account data from the following API endpoint: http://localhost:3000/api/accounts. The data will be an object with the following properties:

- `accounts` (array of `Accounts`): an array with the user's bank accounts
- `name` (string): the user's full name

An `Account` object has the following properties:

- `accountNumber` (string): the account number
- `balance` (number): the current balance of the account
- `name` (string): the name of the account

## Requirements

- Display the user's first name at the top of the page where it says "Welcome, [name]"
- Each card in the list should include the last 4 digits of the account number, the name of the account, and the balance
- If the balance is negative, the balance should be displayed in red
- The button should be a link to the account details page. You can use the following URL: `/accounts/[accountNumber]` (this won't actually work, but that's OK for this task)

## Design notes

- The background color is #A6BFF9
- The button color is #3D63DD, with a stroke of #87A5EF
- The text color is #1E1F24 for the dark text and #62636C for the light text
- The design is overall very bad and we have much better designs for our actual UI

## Your build options

There are a few different ways you can build this, choose whatever's most comfortable for you:

- If you'd like to use the NextJS Pages router, then you can just create a new page in the `pages` directory and go from there
- If you'd like to use the NextJS App router, you can build out the `app` directory and do your work there
- If you'd like to build this as a normal React component, you'll can open up the `components/Accounts.tsx` file and build it there

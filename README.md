# Budgtr

The assignment for this project was to build a full stack budgeting application called Budgtr, where people can log their financial transactions. There would be 2 days to build a backend with Express and Node, and frontend with React.

## Live Demos

You can find a live demo of the site at [budgtr-finance.netlify.app](https://budgtr-finance.netlify.app/). 

The code for the backend can be found in [this github repo](https://github.com/Ari-Jackson/budget-app-backend).

## My Stretch goals

For this project there were a few features, technologies or skills that were not required but were implemented. 
1. **Typescript**. This project uses Typescript instead of Javascript. My experinece with Typescript is shallow so this is where most of the "stretching" happened. Types forced me to think more critically about the input and outputs of functions, which led to more reusable componenets and cleaner code.

2. **Tan Stack Query**. This project uses [Tan Stack Query](https://tanstack.com/query/latest) for fetching data. The rest of my stretching happened here since I've never worked with Tan Stack Query before. I'm glad I pushed myself to use it, and I will definietly be using it in frontend/fullstack apps moving forward. Having auto caching and the ability to refetch after mutations makes for a much better UX and DX.

3. **Vite**. This project uses [Vite](https://vitejs.dev/) instead of create-react-app.

5. **Account Total In NavBar**. The account total can be seen in both the navbar and the home page.

7. **Unix timestamps & Day.js**. The model was updated to use Unix timestamps instead of strings, and formatted using [Day.js](https://day.js.org/). The new and edit forms use native form date handling and required a bit or work around to convert to Unix timestamp.

9. **Deposit / Withdrawl**. The model was updated to have a deposit "column" with a boolean value that's used to select whether the transaction is a deposit or withdrawal. Withdrawals and deposits are used to calculate the account total through subtraction and addition respectively.

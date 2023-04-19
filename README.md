# Budgtr

The assignment for this project was to build a full stack budgeting application called Budgtr, where people can log their financial transactions. There would be 2-4 days to build a backend with Express and Node, and frontend with React.

## Live Demos

You can find a live demo of the site at [budgtr-finance.netlify.app](https://budgtr-finance.netlify.app/). 

The code for the backend can be found [in this github repo](https://github.com/Ari-Jackson/budget-app-backend).

The trello board used for completing this project is linked [here](https://trello.com/b/ok91lltS/budgtr-app).

## My Stretch goals

For this project there were a few features, technologies or skills that were not required but were implemented. 
1. **Typescript**. This project uses Typescript instead of Javascript. My experinece with Typescript is not very deep so this is where 50% of my "stretching" happened. Even though this isn't something that would be felt on the front end, the retstraints that came with working with types forced me to think more critically about the input and outputs of my functions and structure of the data. This pushed me to build more reusable componenets (to avoid writing unnecessary types) and I'm really proud of how much cleaner the logic ended up being.

2. **Tan Stack Query**. This project uses [Tan Stack Query](https://tanstack.com/query/latest) - formerly React Query - for fetching data. The other 50% of my stretching was here. I've never worked with Tan Stack Query before this project, though I'd heard about it and how powerful it is. I'm glad I pushed myself to use it becuase it is more powerful than what I've heard and I will definietly be using it in any frontend/fullstack app I build moving forward. Having auto caching and refetching after mutations helps to create a much nicer developer AND user experience. 

3. **Vite**. This project uses [Vite](https://vitejs.dev/) instead of create-react-app. 

### Ways I would like to continue working on this app
- Use the date object for the date, instead of just a string and make it human readable.
- Use a checkbox/similar strategy to allow the user to select whether the transaction is a deposit or withdrawal. If it is a withdrawal, make sure the value subtracts and deposit values add. By default, your user would have be entering values that are positive or negative.
- Add a library like [chartjs](https://www.chartjs.org) or [D3](https://www.chartjs.org) to provide visualizations

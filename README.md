CRM Application - Frontend
This is the frontend part of the Customer Relationship Management (CRM) application. It's the part of the application that users interact with directly, built using React and TypeScript.

Technologies Used?
React: A JavaScript library that helps us build user interfaces, specifically for creating the website’s pages and components.
TypeScript: This is a superset of JavaScript. It adds type checking, making it easier to spot errors during development and improving the developer experience.
React Router: This helps us create multiple pages in the app. It makes the application feel like a website with different sections (like a dashboard, customer list, etc.).
Axios: This is a library to make HTTP requests to the backend. It helps us send data and receive information from the serve


 Project Structured

crm-frontend/
│
├── src/
│   ├── components/                
│   ├── pages/                     
│   ├── services/                  
│   ├── App.tsx                    
│   ├── index.tsx                  
└── package.json    



Key Features
Customer Management: You can add new customers, edit existing ones, delete them, and see a list of all customers.
Interaction Tracking: You can log customer interactions (like calls, emails, meetings), which include the date and a description of what happened.
Responsive Design: The application is designed to work on both desktop and mobile devices, so it adjusts to different screen sizes.

Dependencies 
These are the key libraries used to build this frontend:

React
React Router
Axios
TypeScript


# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

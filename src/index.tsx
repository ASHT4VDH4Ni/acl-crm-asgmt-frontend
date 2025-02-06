// // src/index.tsx

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// // Named import (no default export in reportWebVitals.ts)
// import reportWebVitals  from './reportWebVitals';  // Update to named import

// // Render the App component into the root div
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // Call reportWebVitals to start tracking and logging web vitals
// reportWebVitals();  // This will log web vitals to the console



// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Named import (no default export in reportWebVitals.ts)
import reportWebVitals from './reportWebVitals';  // Update to named import

// Render the App component into the root div
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals with a function to handle the results
reportWebVitals(console.log);  // Logs web vitals to the console

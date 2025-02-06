// import { reportWebVitals } from 'web-vitals';



// const reportWebVitalsFunction = (metric: any) => {
//   console.log(metric); // Log metrics to console or handle them as needed
// };

// // reportWebVitals(reportWebVitalsFunction);

// // const reportWebVitals = (onPerfEntry?: ReportHandler) => {
// //   if (onPerfEntry && onPerfEntry instanceof Function) {
// //     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
// //       getCLS(onPerfEntry);
// //       getFID(onPerfEntry);
// //       getFCP(onPerfEntry);
// //       getLCP(onPerfEntry);
// //       getTTFB(onPerfEntry);
// //     });
// //   }
// // };



// export default reportWebVitals;


// src/reportWebVitals.ts

// Import specific web vitals functions from 'web-vitals' library
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

// Define a function to handle and log the web vitals metrics
const reportWebVitals = (metric: any) => {
  // Log the metric to the console (you can replace this with your custom logic)
  console.log(metric);
  // Optionally, you could send the metrics to an analytics service here
};

// Report the web vitals metrics by calling the respective functions from the 'web-vitals' library
onCLS(reportWebVitals);  // Cumulative Layout Shift
onFCP(reportWebVitals);  // First Contentful Paint
onFID(reportWebVitals);  // First Input Delay
onLCP(reportWebVitals);  // Largest Contentful Paint
onTTFB(reportWebVitals); // Time to First Byte

export default reportWebVitals;
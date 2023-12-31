import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const element = <h1>Hello, world</h1>;

// function tick(): any {
//   const element = (
//     <div>
//       <h1>Hello, world</h1>;
//       <h2>It is { new Date().toLocaleTimeString() }</h2>
//     </div>
//   );
//   const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
//   );

//   root.render(
//     <React.StrictMode>
//       {element}
//       <App />
//     </React.StrictMode>
//   );
// }

// setInterval(tick, 1000)

root.render(
  <React.StrictMode>
    {element}
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

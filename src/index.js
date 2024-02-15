import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*const titulo = React.createElement('h1', {className: 'brown'}, "Meu primeiro projeto");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
titulo
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



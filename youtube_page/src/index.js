import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//get the div element with id of root from index.html
const el = document.getElementById('root');
//tell React to get control of the element
const root = ReactDOM.createRoot(el);
//show that component on screen by passing an JSX element
root.render(<App />);

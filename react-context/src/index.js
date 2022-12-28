import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './components/App';

const el = document.getElementById('root');
const root = ReactDOMClient.createRoot(el);
root.render(<App />);

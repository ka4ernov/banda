import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';

import UiProvider from './store/UiProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UiProvider>
        <App />
    </UiProvider>
);
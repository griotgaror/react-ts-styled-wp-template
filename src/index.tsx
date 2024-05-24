import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/router';

import { AppDataProvider } from './context/appDataContext';

const App = function () {
    return (
        <AppDataProvider>
            <Router />
        </AppDataProvider>
    );
};

const rootElement = document.querySelector('#app') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

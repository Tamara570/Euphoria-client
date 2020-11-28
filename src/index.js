import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './Components/App/App';
import { AuthProvider } from './context/auth-context'
import { AppProvider } from './context/app-context'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
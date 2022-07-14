import React from 'react';
import './i18n/index';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThemeProvaider from './context/themeProvider';
import LikeProvider from './context/likeProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvaider>
      <LikeProvider>
        <App />
      </LikeProvider>
    </ThemeProvaider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

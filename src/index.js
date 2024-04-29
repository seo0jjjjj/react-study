import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import { MyPage } from './pages/MyPage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyPage />
  </React.StrictMode>
);

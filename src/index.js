import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'file-loader?name=[name].[ext]!./index.html';
import 'normalize.css';
import './stylesheets/style.scss';

createRoot(document.getElementById('app')).render(<App />);
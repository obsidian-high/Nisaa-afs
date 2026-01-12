import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'  // <--- IMPORTANT: Make sure your style.css is imported here!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from '@sentry/react'
import ReactGA from 'react-ga4'
import App from './App.jsx'
import './style.css'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  enabled: import.meta.env.PROD,
  tracesSampleRate: 0,
});

// Initialize Google Analytics — only on production
if (import.meta.env.PROD) {
  ReactGA.initialize('G-MT1TZL3LQD');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

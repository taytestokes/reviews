import React from 'react'
import ReactDOM from 'react-dom'

// Main styles for TailwindCSS
import './styles/main.css'

// Root Component
import { Dashboard } from './components/Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root'),
)

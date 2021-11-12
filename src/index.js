import React from 'react'
import ReactDOM from 'react-dom'

// Main styles for TailwindCSS
import './styles/main.css'

// Root Component
import { App } from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

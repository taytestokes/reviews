import React from 'react'
import ReactDOM from 'react-dom'

// Main styles for TailwindCSS
import './styles/main.css'

// Root Component
import { Application } from './components/Application'

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root'),
)

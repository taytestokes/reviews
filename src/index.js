import React from 'react'
import ReactDOM from 'react-dom'

import { Application } from './Application'

// Main styles for TailwindCSS
import './styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root'),
)

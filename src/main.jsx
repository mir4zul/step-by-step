import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ensureDefaultEnglish, restoreReadingPosition } from './translation.js'

ensureDefaultEnglish()
restoreReadingPosition()
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)

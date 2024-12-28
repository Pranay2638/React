import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'click to visit me',
)

createRoot(document.getElementById('root')).render(
  reactElement
)

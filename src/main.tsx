import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RAf from './pages/rAF/index.tsx'
import UseHook from './pages/useHook/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <UseHook/> */}
    {/* <RAf/> */}
  </React.StrictMode>,
)

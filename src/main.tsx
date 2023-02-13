import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ColorsContextProvider } from './contexts/ApplicationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorsContextProvider>
      <App />
    </ColorsContextProvider>
  </React.StrictMode>,
)

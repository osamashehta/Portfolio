// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fortawesome/fontawesome-free/css/all.min.css"
import { store } from './rtk/Store.jsx'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Importa Provider do react-redux
import { Provider } from 'react-redux'; 
// 2. Importa o store que acabamos de configurar
import store from './store.js'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Envolve o componente App com o Provider, passando o store como prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
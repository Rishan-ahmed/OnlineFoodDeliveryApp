import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './components/state/store'
import { Get_user } from './components/state/authentication/Action.jsx'



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
   
    </BrowserRouter>
  </StrictMode>,
)

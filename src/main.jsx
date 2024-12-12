import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import ContextShare from './contexts/ContextShare.jsx'
import TokenAuth from './contexts/TokenAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TokenAuth>
     <ContextShare>
       <BrowserRouter>
        <App />
      </BrowserRouter>
     </ContextShare>
   </TokenAuth>
  </StrictMode>,
)

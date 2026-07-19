import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FocusDashbord from './FocusDashbord.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusDashbord />
  </StrictMode>,
)

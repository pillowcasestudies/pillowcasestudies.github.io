import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Message from './MessageComponent.jsx'

createRoot(document.getElementById('message_root')).render(
  <StrictMode>
    <Message />
  </StrictMode>,
)


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./Header"
import Maincontent from "./Maincontent"
import Footer from "./Footer"
import App from './App.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)







function Page() {
  return (
      <main>
          <Header />
          <Maincontent/>
          <Footer />
      </main>
  )
}
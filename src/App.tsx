import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import useSmoothScroll from './utils/Lenis'

const App: React.FC = () => {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
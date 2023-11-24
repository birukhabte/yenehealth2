import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import NotFoundContent from './components/NotFoundContent'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col font-inter bg-white">
    <TopBar />
    <Navbar />
    <div className="flex-1 bg-white">
      {children}
    </div>
    <Footer />
  </div>
)

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><NotFoundContent /></Layout>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Layout><NotFoundContent /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



// yh-dev 33

import './App.css'
import { Navbar } from './components/navBar/Navbar'
import { NavbarUser } from './components/navBar-user/NavbarUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Login } from './components/login/Login'
import { Home } from './pages/home/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  console.log('isLoggedIn =', isLoggedIn)

  return (
    <BrowserRouter>
      {isLoggedIn ? <NavbarUser onLogout={handleLogout} /> : <Navbar />}

      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

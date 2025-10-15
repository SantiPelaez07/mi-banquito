import './App.css'
import { Navbar } from './components/navBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/login/Login'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path = "/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

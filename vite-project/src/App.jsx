import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      < Header />
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/Contacts' element = {<Contacts/>}></Route>
          <Route path='/Login' element = {<Login/>}></Route>
          <Route path='/Register' element = {<Register/>}></Route>
        </Routes>
        {<Footer />}
      </BrowserRouter>
    </>
  )
}

export default App

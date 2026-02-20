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

  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
      < Header />
      <main className='flex-grow bg-gray-300'>
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/Contacts' element = {<Contacts/>}></Route>
          <Route path='/Login' element = {<Login/>}></Route>
          <Route path='/Register' element = {<Register/>}></Route>
        </Routes>
        </main>
        {<Footer />}
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
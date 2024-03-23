// npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as chickenService from './services/chickenService'

// pages
import Landing from './pages/Landing/Landing'
import ChickenList from './pages/ChickenList/ChickenList'

// components
import Nav from './components/Nav'

// css
import './App.css'

function App() {
  const [chickens, setChickens] = useState([])

  useEffect(() => {
    const fetchChickens = async () => {
      const data = await chickenService.index()
      setChickens(data)
    }
    fetchChickens()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/chickens' element={<ChickenList chickens={chickens} />} />
      </Routes>
    </>
  )
}

export default App
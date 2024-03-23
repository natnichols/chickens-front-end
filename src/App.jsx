// npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as chickenService from './services/chickenService'

// pages
import Landing from './pages/Landing/Landing'
import ChickenList from './pages/ChickenList/ChickenList'
import NewChicken from './pages/NewChicken/NewChicken'

// components
import Nav from './components/Nav'

// css
import './App.css'

function App() {
  const navigate = useNavigate()
  const [chickens, setChickens] = useState([])

  useEffect(() => {
    const fetchChickens = async () => {
      const data = await chickenService.index()
      setChickens(data)
    }
    fetchChickens()
  }, [])

  const handleAddChicken = async formData => {
    const newChicken = await chickenService.create(formData)
    setChickens([newChicken, ...chickens])
    navigate('/chickens')
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/chickens' element={<ChickenList chickens={chickens} />} />
        <Route path='/chickens/new' element={
          <NewChicken handleAddChicken={handleAddChicken} />
        } />
      </Routes>
    </>
  )
}

export default App
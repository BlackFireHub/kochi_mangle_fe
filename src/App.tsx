import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from '@/pages/About'
import Home from '@/pages/Home'

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App

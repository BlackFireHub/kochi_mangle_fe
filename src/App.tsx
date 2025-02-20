import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'
import Categories from '@/pages/Categories'
import Home from '@/pages/Home'

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

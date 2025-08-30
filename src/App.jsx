import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './normalize.css'
import './App.css'
import Hero from './pages/Hero'
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App

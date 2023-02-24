import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Link>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

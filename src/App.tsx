import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Gallery from './Gallery'

function App() {
  return (
    <div id='app'>
      <nav>
        <Link to="/">Home</Link> | <Link to="/gallery">Galeria</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App

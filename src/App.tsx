import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import MainLayout from './MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

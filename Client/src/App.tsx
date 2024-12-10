import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './Pages/login'
import Restaurants from './Pages/Restaurants'
import Restaurant1 from './Pages/Restaurant1'
import Restaurant2 from './Pages/Restaurant2'
import Restaurant3 from './Pages/Restaurant3'
import webnameLogo from '../Images/Webname_nobg.png'
import Pizza from './Pages/Pizza'

function App() {
  const [count, setCount] = useState(0)

const HomePage = ({  }: { count: number; setCount: (cb: (prev: number) => number) => void }) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple logic to redirect based on search query
    const query = searchQuery.toLowerCase()
    if (query.includes('r1')) {
      navigate('/restaurant1')
    } else if (query.includes('r2')) {
      navigate('/restaurant2')
    } else if (query.includes('r3')) {
      navigate('/restaurant3')
    }
  }

  return (
    <>
      <div className="logo-container">
        <img 
          src={webnameLogo} 
          alt="Crave-Wave Logo"
          className="website-logo"
        />
      </div>
      
      {/* Add search bar */}
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      <div className="login-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  )
}

return (
    <Router>
      <Routes>
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant1" element={<Restaurant1 />} />
        <Route path="/restaurant2" element={<Restaurant2 />} />
        <Route path="/restaurant3" element={<Restaurant3 />} />
        <Route path="/" element={<HomePage count={count} setCount={setCount} />} />
      </Routes>
    </Router>
  )
}

export default App
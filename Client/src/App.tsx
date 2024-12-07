import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Restaurants from './Pages/Restaurants'
import webnameLogo from '../Images/Webname.png'
import Food from './Pages/Food'

function App() {
  const [count, setCount] = useState(0)

  

const HomePage = ({ count, setCount }: { count: number; setCount: (cb: (prev: number) => number) => void }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleFindRestaurant = () => {
    navigate('/restaurants')
  }

  const handleFindFood = () => {
    navigate('/food')
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
      <div className="login-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="find-restaurant-container">
        <button className="find-restaurant-button" onClick={handleFindRestaurant}>
          Wave Restaurants Near You
        </button>
      </div>
       <div className="find-food-container">
        <button className="find-food-button" onClick={handleFindFood}>
          Crave Food Near You
        </button>
      </div>
    </>
  )
}

return (
    <Router>
      <Routes>
        <Route path="/food" element={<Food />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/" element={<HomePage count={count} setCount={setCount} />} />
      </Routes>
    </Router>
  )
}

export default App
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage count={count} setCount={setCount} />} />
      </Routes>
    </Router>
  )
}

// Separate HomePage component
const HomePage = ({  }: { count: number; setCount: (cb: (prev: number) => number) => void }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <div className="login-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Login from './components/logIn/Login'
import Register from './components/register/Register' 

function App() {
  const [showRegister, setShowRegister] = useState(false) 

  return (
    <div>
      {showRegister ? (
        <Register />
      ) : (
        <Login />
      )}

      <div>
        {!showRegister ? (
          <p>
            Not signed in yet? <button onClick={() => setShowRegister(true)}>Register now</button>
          </p>
        ) : (
          <p>
            Already have an account? <button onClick={() => setShowRegister(false)}>Login here</button>
          </p>
        )}
      </div>
    </div>
  )
}

export default App
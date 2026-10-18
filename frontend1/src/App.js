import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Student from './pages/Student'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          <Route 
              path="/about" 
              element={<Home />} 
            />
          <Route 
              path="/courses" 
              element={<Home />} 
            />
          <Route 
              path="/contact" 
              element={<Home />} 
            />
            <Route 
              path="/register" 
              element={<Register />} 
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          <Route 
              path="/student" 
              element={<Student />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


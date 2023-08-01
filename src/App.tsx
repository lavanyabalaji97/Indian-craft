import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signupform from './Components/Signup/Signupform'


function App() {
  return (
    <div style={{ backgroundColor: "#f9f2ea"}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signupform' element={<Signupform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
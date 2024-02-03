import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from './components/Header'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App

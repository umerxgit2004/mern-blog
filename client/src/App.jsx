import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from './components/Header'
import FooterComponent from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      
      <Route path="/home" element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>


    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default App

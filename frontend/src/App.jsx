
import './App.css'
import Instagram from './Pages/Instagram'
import Reels from './Pages/Reels'
import Messages from './Pages/Messages'
import Search from './Pages/Search'
import Explore from './Pages/Explore'
import Notification from './Pages/Notification'
import Profile from './Pages/Profile'
import Profile1 from './Pages/Profile1'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Forgot from './pages/auth/forgot'
import Verifyotp from './pages/auth/Verifyotp'

import {Toaster} from 'react-hot-toast'
import Reset from './Pages/auth/Reset'

function App() {
  

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        

        <Route path='/' element={<AuthLayout/>}>
           <Route path = '/' element ={<Login/>}/>
           <Route path = '/login' element ={<Login/>}/>
           <Route path = '/auth/register' element ={<Register/>}/>
           <Route path = '/auth/forgot' element ={<Forgot/>}/>
                      <Route path = '/auth/reset/:token' element ={<Reset/>}/>
           
           <Route path = '/auth/verify' element = {<Verifyotp/>}/>
          
      </Route>
        
       <Route path='/' element={<AppLayout/>}>
       <Route path='/instagram' element ={<Instagram/>}/>
        <Route path='search' element ={<Search/>}/>
        <Route path='profile' element = {<Profile/>}/>
        <Route path='notification' element ={<Notification/>}/>
        <Route path='explore' element = {<Explore/>}/>
         <Route path='messages' element ={<Messages/>}/>
          <Route path ='reels' element = {<Reels/>}/>
          <Route path='profile1' element ={<Profile1/>}/>
         
     
  </Route>
      

      </Routes>
      
      </BrowserRouter>

      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default App




import './App.css'
import Portal from './Pages/Portal'
import Verifyotp from './Pages/Verifyotp'
import Instagram from './Pages/Instagram'
import Reels from './Pages/Reels'
import Messages from './Pages/Messages'
import Search from './Pages/Search'
import Explore from './Pages/Explore'
import Notification from './Pages/Notification'
import Profile from './Pages/Profile'
import Profile1 from './Pages/Profile1'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './Layout/AuthLayout'
import AppLayout from './Layout/AppLayout'

function App() {
  

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        

        <Route path='/' element={<AuthLayout/>}>
           <Route path = '/' element ={<Portal/>}/>
           
           <Route path = '/verify' element = {<Verifyotp/>}/>
          
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
    </>
  )
}

export default App



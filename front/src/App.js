import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'
import SetAvatar from './pages/setAvatar'
import User from './pages/User'

import Signup from './pages/Signup'
import Topics from './pages/Me/Topics/Topics'
import Info from './pages/Me/Info/Info'
import Me from './pages/Me/Layout'

const App = () => {
  const _id ="";
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Chat />}/>
        <Route path='/register' exact element={<Register />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='/set-avatar' exact element={<SetAvatar />}/>
        <Route path={`/user/*`} exact element={<User />}/>
        <Route path={`/me/:link`} exact element={<Me />}/>
        <Route path={`/me/`} exact element={<Me />}/>
        
        <Route path={`/signup`} exact element={<Signup />}/>
      
      </Routes>
</BrowserRouter>  )
}

export default App
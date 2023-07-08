import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'
import SetAvatar from './pages/setAvatar'
import User from './pages/User'

import Signup from './pages/Signup'
import Topics from './pages/Me/Topics/Topics'
import Info from './pages/Me/Info/Info'
import Me from './pages/Me/Layout'
import Register from './pages/Register/Layout'
import Friends from './pages/Friends'
import Members from './pages/Members'
import Messages from './pages/Messages/Messages'

const App = () => {
  const _id ="";
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Chat />}/>
        {/* <Route path='/register' exact element={<Register />}/> */}
        <Route path='/login' exact element={<Login />}/>
        <Route path='/set-avatar' exact element={<SetAvatar />}/>
        <Route path={`/user/*`} exact element={<User />}/>
        <Route path={`/me/:link`} exact element={<Me />}/>
        <Route path={`/me/`} exact element={<Me />}/>
        <Route path={`/friends`} exact element={<Friends />}/>
        <Route path={`/users`} exact element={<Members />}/>
        <Route path={`/chat`} exact element={<Messages />}/>
        
        <Route path={`/signup`} exact element={<Register />}/>
        <Route path={`/signup/:link`} exact element={<Register />}/>
      
      </Routes>
</BrowserRouter>  )
}

export default App
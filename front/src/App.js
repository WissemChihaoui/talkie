import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'
import SetAvatar from './pages/setAvatar'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Chat />}/>
        <Route path='/register' exact element={<Register />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='/set-avatar' exact element={<SetAvatar />}/>
      </Routes>
</BrowserRouter>  )
}

export default App
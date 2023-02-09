import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditUser from './features/users/EditUser'
import Layout from './components/Layout'
import Login from './features/auth/Login'
import Logs from './features/logs/Logs'
import Main from './components/Main'
import MainLayout from './components/MainLayout'
import NewUser from './features/users/NewUser'
import Prefetch from './components/Prefetch'
import Users from './features/users/Users'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Welcome/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='newuser' element={<NewUser/>}/>
        <Route element={<Prefetch/>}>
          <Route path='main' element={<MainLayout/>}>
            <Route index element={<Main/>}/>
            <Route path='users'>
              <Route index element={<Users/>}/>
              <Route path=':id' element={<EditUser/>}/>
            </Route>
            <Route path='logs'>
              <Route index element={<Logs/>}/>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
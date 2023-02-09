import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <div className='main-container'>
        <Outlet />
      </div>
      <MainFooter />
    </>
  )
}

export default MainLayout
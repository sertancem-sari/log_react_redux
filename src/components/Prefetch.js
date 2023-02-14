import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { logsApiSlice } from '../features/logs/logsApiSlice'
import { usersApiSlice } from '../features/users/usersApiSlice'
import { store } from '../app/store'

const Prefetch = () => {
  useEffect(()=>{
    console.log('MOUNTED')
    const logs=store.dispatch(logsApiSlice.endpoints.getLogs.initiate())
    const user =store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return ()=>{
      console.log('UNMOUNTED')
      logs.unsubscribe()
      user.unsubscribe()
    }
  },[])
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Prefetch
import React,  { useEffect } from 'react'
import { useNavigate, useLocation, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser, faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { useSendLogoutMutation } from '../features/auth/authApiSlice'

const MAİN_REGEX = /^\/main(\/)?$/
const LOGS_REGEX = /^\/main\/logs(\/)?$/
const USERS_REGEX = /^\/main\/users(\/)?$/

const MainFooter = () => {
  
  const navigate= useNavigate()
  const {pathname}= useLocation()
  const goHome= ()=>navigate('/main')

  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  useEffect(() => {
      if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>

  if (isError) return <p>Error: {error.data?.message}</p>

  let dashClass = null
  if (!MAİN_REGEX.test(pathname) && !LOGS_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
      dashClass = "main-footer"
  }

  const logoutButton = (
    <button
        className="button"
        title="Logout"
        onClick={sendLogout}
    >
        <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  )

  let homeButton = null
  if(pathname!=='/main'){
    homeButton=(
        <button
            className='homeButton'
            title='home'
            onClick={goHome}
        >
            <FontAwesomeIcon icon={faHomeUser} /><FontAwesomeIcon icon="" />
        </button>
    )
  }
    
  return (
    <footer className='main-footer'>
        {homeButton}
        <p>Mevcut Kullanıcı:</p>
        <p>Durum:</p>
        {logoutButton}
    </footer>
  )
}

export default MainFooter
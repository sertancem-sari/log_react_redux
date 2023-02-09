import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const MainFooter = () => {
  
  const navigate= useNavigate()
  const {pathname}= useLocation()
  const goHome= ()=>navigate('/main')

  let homeButton = null
  if(pathname!=='/main'){
    homeButton=(
        <button
            className='homeButton'
            title='home'
            onClick={goHome}
        >
            <FontAwesomeIcon icon={faHouse} />
        </button>
    )
  }
    
  return (
    <footer className='main-footer'>
        {homeButton}
        <p>Mevcut Kullanıcı:</p>
        <p>Durum:</p>
    </footer>
  )
}

export default MainFooter
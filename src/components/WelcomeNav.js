import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleCheck, faInfoCircle, faPager, faSignIn, faUsers } from '@fortawesome/free-solid-svg-icons'

const WelcomeNav = () => {
  
    const welcome_nav = (
        <nav>
            <a href="#first">
              <FontAwesomeIcon icon={faPager}/>
              <h4>Anasayfa</h4>
            </a>
            <a href="#second">
              <FontAwesomeIcon icon={faSignIn}/>
              <h4>Giriş Yap</h4>
            </a>
            <a href="#third">
              <FontAwesomeIcon icon={faFileCircleCheck}/>
              <h4>LOGS</h4>
            </a>
            <a href="#fourth">
              <FontAwesomeIcon icon={faUsers}/>
              <h4>Kayıt Ol</h4>
            </a>
            <a href="#fifth">
              <FontAwesomeIcon icon={faInfoCircle}/>
              <h4>Yardım</h4>
            </a>
          </nav>
      )

  return (
    {welcome_nav}
  )
}

export default WelcomeNav
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleCheck, faInfoCircle, faPager, faSignIn, faUsers } from '@fortawesome/free-solid-svg-icons'


const MainHeader = () => {
  return (
    <div className="nav_header">
      <div className="nav_header_menu">
        <ul className="nav_header_menu_list">
          <li className="header_menu__group"><Link to='/'><span className='header_text'><FontAwesomeIcon icon={faPager}/> ANASAYFA</span></Link></li>
          <li className="header_menu__group"><Link to='/login'><span className='header_text'><FontAwesomeIcon icon={faSignIn}/>GİRİŞ YAP</span></Link></li>
          <li className="header_menu__group"><Link to='/main/logs'><span className='header_text'><FontAwesomeIcon icon={faFileCircleCheck}/>LOGS</span></Link></li>
          <li className="header_menu__group"><Link to='/newuser'><span className='header_text'><FontAwesomeIcon icon={faUsers}/>KAYIT OL</span></Link></li>
          <li className="header_menu__group"><Link to='http://localhost:3000/#fifth'><span className='header_text'><FontAwesomeIcon icon={faInfoCircle}/>BİLGİ</span></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default MainHeader
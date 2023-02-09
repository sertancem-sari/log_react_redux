import React from 'react'
import { Link } from 'react-router-dom'
import log from '../img/log.png'
import users from '../img/users.png'

const Main = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  
  return (
          <div className='welcome'>
            <p>{today}</p>

            <h1>Hoşgeldiniz!</h1>
            <div className='elements'>
              <div className='element'>
                <img src={log} alt="log img"/>
                <p><Link to="/main/logs">Logları görüntüle</Link></p>
              </div>
              <div className='element'>
                <img src={users} alt="user img" />
                <p><Link to="/main/users">Kullanıcı ayarları</Link></p> 
              </div>
            </div>
          </div>

        
  )
}

export default Main


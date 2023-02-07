import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleCheck, faInfoCircle, faPager, faSignIn, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Welcome = () => {
  return (
    <>
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
  
      <div className= 'container'> 
        <section id= 'first'>
          <h1><span className="welcome-text">SİSTEM LOG</span></h1>
          <p className='welcome-parag'>Turkuvaz Medya Sistem Log Yönetimi</p>
        </section>
  
        <section id= 'second'>
          <h1 className='second-head'><span className="welcome-text-second">SİSTEM LOG SAYFASINA GİRİŞ</span></h1>
          <p className='welcome-parag'>Sistem loglarına ulaşmak için giriş yapınız...</p>
          <Link to='/login'><button className='welcome-button'>Giriş Yap</button></Link>
        </section>
  
        <section id= 'third'>
          <h1 className='second-head'><span className="welcome-text-second">LOGS</span></h1>
          <p className='welcome-parag'><a href='http://localhost:3000/#second' className='welcome-parag'>Sistem loglarına ulaşmak için giriş yapınız...</a></p>
        </section>
    
        <section id= 'fourth'>
        <h1 className='second-head'><span className="welcome-text-second">KAYIT OL</span></h1>
          <p className='welcome-parag'>Sistem loglarına ulaşmak için KAYIT OL...</p>
          <Link to='/main/users/new'><button className='welcome-button'>KAYIT OL</button></Link>
        </section>

        <section id= 'fifth'>
          <main>
              <p className='welcome-parag'>Sistem&Network</p>
              <address className="addr">
                  TURKUVAZ MEDYA<br />
                  Güzeltepe Mahallesi<br />
                  Mareşal Fevzi Çakmak Cad.<br />
                  <a href="tel:+9002123543000"> (0212) 354 30 00/2062</a>
                  <br />
                  <p>Destek: Sertan Cem SARI</p>
              </address>  
          </main>
        </section>
      </div>
    </>
  )
}

export default Welcome
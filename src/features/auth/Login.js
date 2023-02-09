import React from 'react'

const Login = () => {
  return (
    <>
      <form className="login-wrap">
	      <div className="login-html">
          <label htmlFor='username' className="welcome-button">KULLANICI GİRİŞİ</label>
		      <input id='username' type="radio" name="tab" className="sign-in" checked/>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor='user' for="user" className="label">Kullanıcı Adı</label>
                <input id="user" type="text" className="input"/>
				      </div>
              <div className="group">
                <label htmlFor='pass' for="pass" className="label">Parola</label>
                <input id="pass" type="password" className="input" data-type="password"/>
              </div>
              <div className="group">
                <button className='button'>Giriş Yap</button>
              </div>
			      </div>
		      </div>
        </div>
      </form>
    </>
  )
}

export default Login
import React from 'react'

const NewUser = () => {
  return (
    <>
      <form className="login-wrap">
	      <div className="login-html">
		      <input id='username' type="text" name="username" className="sign-in" checked/>
          <label htmlFor='username' className="welcome-button">YENİ KULLANICI</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="username" className="label">Kullanıcı Adı</label>
                <input 
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  className="input"
                />
				      </div>
              <div className="group">
                <label for="password" className="label">Parola</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input" 
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">ROL</label>
                <input
                  id="roles"
                  name="roles"
                  multiple={true}
                  size="3"  
                  className="input"
                />
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

export default NewUser
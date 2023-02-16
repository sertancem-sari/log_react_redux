import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist  from '../../hooks/usePersist'


const Login = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [persist, setPersist] = usePersist()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
      userRef.current.focus()
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [username, password])


  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const { accessToken } = await login({ username, password }).unwrap()
          dispatch(setCredentials({ accessToken }))
          setUsername('')
          setPassword('')
          navigate('/main')
      } catch (err) {
          if (!err.status) {
              setErrMsg('No Server Response');
          } else if (err.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg(err.data?.message);
          }
          errRef.current.focus();
      }
  }

  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePwdInput = (e) => setPassword(e.target.value)
  const handleToggle = () => setPersist(prev => !prev)

  const errClass = errMsg ? "errmsg" : "offscreen"

  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <form className="login-wrap" onSubmit={handleSubmit}>
	      <div className="login-html">
          <label htmlFor='username' className="welcome-button">KULLANICI GİRİŞİ</label>
		      <input id='header' type="radio" name="tab" className="sign-in" />
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor='user' className="label">Kullanıcı Adı</label>
                <input
                  className="input"
                  type="text"
                  id="username"
                  ref={userRef}
                  value={username}
                  onChange={handleUserInput}
                  autoComplete="off"
                  required
                />
				      </div>
              <div className="group">
                <label htmlFor='pass' className="label">Parola</label>
                <input
                  className="input"
                  type="password"
                  id="password"
                  onChange={handlePwdInput}
                  value={password}
                  required
                />
              </div>
              <div className="group">
                <button className='button'>Giriş Yap</button>
                <label htmlFor="persist" className="form__persist">
                    <input
                        type="checkbox"
                        className="form__checkbox"
                        id="persist"
                        onChange={handleToggle}
                        checked={persist}
                    />
                      Trust This Device
                  </label>
              </div>
			      </div>
		      </div>
        </div>
      </form>
      <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
    </>
  )
}

export default Login
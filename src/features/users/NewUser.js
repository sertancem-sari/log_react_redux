import React from 'react'
import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./usersApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const NewUser = () => {

  const [addNewUser, {
      isLoading,
      isSuccess,
      isError,
      error
  }] = useAddNewUserMutation()

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [roles, setRoles] = useState(["Employee"])

  useEffect(() => {
      setValidUsername(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
      setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
      if (isSuccess) {
          setUsername('')
          setPassword('')
          setRoles([])
          navigate('/dash/users')
      }
  }, [isSuccess, navigate])

  const onUsernameChanged = e => setUsername(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const onRolesChanged = e => {
      const values = Array.from(
          e.target.selectedOptions, //HTMLCollection 
          (option) => option.value
      )
      setRoles(values)
  }

  const canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading

  const onSaveUserClicked = async (e) => {
      e.preventDefault()
      if (canSave) {
          await addNewUser({ username, password, roles })
      }
  }

  const options = Object.values(ROLES).map(role => {
      return (
          <option
              key={role}
              value={role}

          > {role}</option >
      )
  })

  const errClass = isError ? "errmsg" : "offscreen"
  const validUserClass = !validUsername ? 'form__input--incomplete' : ''
  const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
  const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''

  return (
    <>
      <form className="login-wrap" onSubmit={onSaveUserClicked}>
	      <div className="login-html">
		      <input id='username' type="text" name="username" className="sign-in" checked/>
          <label htmlFor='username' className="welcome-button">YENİ KULLANICI</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="username" className="label">Kullanıcı Adı</label>
                <input 
                  className={`input ${validUserClass}`}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={onUsernameChanged}
                />
				      </div>
              <div className="group">
                <label for="password" className="label">Parola</label>
                <input
                  className={`input ${validPwdClass}`}
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onPasswordChanged}
                />
              </div>
              <div className="group">
                <label for="pass" className="label" htmlFor='roles'>ROL</label>
                <select
                    id="roles"
                    name="roles"
                    className={`input ${validRolesClass}`}
                    multiple={true}
                    size="3"
                    value={roles}
                    onChange={onRolesChanged}
                >
                    {options}
                </select>
              </div>
              <div className="group">
                <button
                    className="button"
                    title="Save"
                    disabled={!canSave}
                >   KAYIT OL
                </button>
              </div>
			      </div>
		      </div>
        </div>
      </form>
      <p className={errClass}>{error?.data?.message}</p>
    </>
  )
}

export default NewUser
import React from 'react'
import { useState, useEffect } from "react"
import { useUpdateUserMutation, useDeleteUserMutation } from "./usersApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const EditUserContent = ({ user }) => {
    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState(user.username)
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(user.roles)
    const [active, setActive] = useState(user.active)

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess || isDelSuccess) {
            setUsername('')
            setPassword('')
            setRoles([])
            navigate('/dash/users')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )
        setRoles(values)
    }

    const onActiveChanged = () => setActive(prev => !prev)

    const onSaveUserClicked = async (e) => {
        if (password) {
            await updateUser({ id: user.id, username, password, roles, active })
        } else {
            await updateUser({ id: user.id, username, roles, active })
        }
    }

    const onDeleteUserClicked = async () => {
        await deleteUser({ id: user.id })
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    let canSave
    if (password) {
        canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading
    } else {
        canSave = [roles.length, validUsername].every(Boolean) && !isLoading
    }

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    const validPwdClass = password && !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''
    return (
    <>
      <form className="login-wrap" onSubmit={e=>e.preventDefault()}>
	      <div className="login-html">
		      <input id='username' type="text" name="username" className="sign-in" checked/>
          <label htmlFor='username' className="welcome-button">KULLANICI AYARLARI</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="username" className="label">Kullanıcı Adı</label>
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
                <label htmlFor="password" className="label">Parola</label>
                <input
                  className={`form__input ${validPwdClass}`}
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onPasswordChanged}
                />
              </div>
              <div className="group">
                <label htmlFor="users-active" className="label">ROL</label>
                <input
                  className="input"
                  id="user-active"
                  name="user-active"
                  type="checkbox"
                  checked={active}
                  onChange={onActiveChanged}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">ROL</label>
                <input
                  id="roles"
                  name="roles"
                  className={`input ${validRolesClass}`}
                  multiple={true}
                  size="3"
                  value={roles}
                  onChange={onRolesChanged}
                />
              </div>
              <div className="group">
                <button
                    className="button"
                    title="Save"
                    onClick={onSaveUserClicked}
                    disabled={!canSave}
                >
                    <FontAwesomeIcon icon={faSave} />
                </button>
                <button
                    className="button"
                    title="Delete"
                    onClick={onDeleteUserClicked}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
        </div>
        </div>
    </form>
      <p className={errClass}>{errContent}</p>
    </>
  )
}

export default EditUserContent
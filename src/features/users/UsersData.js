import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";

import React from 'react'

const UsersData = ({userId}) => {

  const user= useSelector(state => selectUserById(state, userId))
  const navigate = useNavigate()

  if(user){
    const handleEditUser = () => navigate(`/main/users/${userId}`)
    const userRolesString = user.roles.toString().replaceAll(',',', ')
    /* const status = user.active ? '': 'table__cell--inactive' */

    return (
        <tr className="table__row">
            <td className="table__cell">{user.username}</td>
            <td className="table__cell">{userRolesString}</td>
            <td className="table__cell">
                <button className="button" onClick={handleEditUser}><FontAwesomeIcon icon={faPenToSquare}/></button>
            </td>
        </tr>
    )

  }else return null

}

export default UsersData
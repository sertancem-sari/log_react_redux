import React from 'react'
import { useGetUsersQuery } from './usersApiSlice'
import UsersData from './UsersData'

const Users = () => {

  const{
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()

  let content

  if (isLoading) content = <p>Loading</p>

  if (isError) content=<p>{error?.data?.message}</p>
 
  if (isSuccess){
    const { ids }=users
    const main_content = ids?.lenght ? ids.map( userId => <UsersData key={userId} userId={userId} />) : null

    content = (
        <table className='table'>
            <thead className='table__thead'>
              <tr>
                <th scope='col' className='table__th'>Kullanıcı Adı</th>
                <th scope='col' className='table__th'>Yetki</th>
                <th scope='col' className='table__th'>Düzenle</th>
              </tr>
            </thead>
            <tbody>
              {main_content}
            </tbody>
        </table>
    )
  }
  return content
}

export default Users
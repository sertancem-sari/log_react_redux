import { useGetUsersQuery } from "./usersApiSlice"
import UsersData from './UsersData'

const Users = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length
            ? ids.map(userId => <UsersData key={userId} userId={userId} />)
            : null

        content = (
            <table className="table__user">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="edit_table_th">Username</th>
                        <th scope="col" className="edit_table_th">Roles</th>
                        <th scope="col" className="edit_table_th">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default Users
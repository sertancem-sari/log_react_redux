import { useGetLogsQuery } from "./logsApiSlice"
import LogsData from "./LogsData"

const Logs = () => {
    const {
        data: logs,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetLogsQuery('logsList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = logs

        const tableContent = ids?.length
            ? ids.map(logId => <LogsData key={logId} logId={logId} />)
            : null

        content = (
            <table className="table">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="edit_table_th">LOG</th>
                        <th scope="col" className="edit_table_th">PORT</th>
                        <th scope="col" className="edit_table_th">AÇIKLAMA</th>
                        <th scope="col" className="edit_table_th">TARİH</th>
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
export default Logs
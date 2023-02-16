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
            <table className="center">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th log__updated">SİSTEM LOG</th>
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
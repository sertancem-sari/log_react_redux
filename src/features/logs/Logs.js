import React from 'react'
import { useGetLogsQuery } from './logsApiSlice'
import LogsData from './LogsData'

const Logs = () => {
  const{
    data: logs,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetLogsQuery()

  let content

  if (isLoading) content = <p>Loading</p>

  if (isError) content=<p>{error?.data?.message}</p>
  
  if (isSuccess){
    const { ids }=logs
    const main_content = ids?.lenght ? ids.map( logId => <LogsData key={logId} logId={logId} />) : null

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

export default Logs
import { useSelector } from "react-redux";
import { selectLogById } from "./logsApiSlice";

const LogsData = ({logId}) => {

  const log= useSelector(state => selectLogById(state, logId))
  

  if (log) {
        return (
            <tr className="table__row user">
                <td className={`table__cell`}>{log.logs[0]}</td>
                <td className={`table__cell`}>{log.logs[1]}</td>
                <td className={`table__cell`}>{log.logs[2]}</td>
                <td className={`table__cell`}>{log.logs[3]}</td>
            </tr>
        )
    } else return null

}

export default LogsData
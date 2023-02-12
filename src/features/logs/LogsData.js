import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLogById } from "./logsApiSlice";

const LogsData = ({logId}) => {

  const log= useSelector(state => selectLogById(state, logId))
  const navigate= useNavigate()

  if (log) {
        return (
            <table class="container">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    
                    <th>
                        <tr> <h1>LOG ALARM</h1></tr>
                        <tr><td>{log.logs[0]}</td></tr>
                    </th>
                    <th>
                        <tr> <h1>PORT</h1> </tr>
                        <tr><td>{log.logs[1]}</td></tr>
                    </th>
                    <th>
                        <tr> <h1>AÇIKLAMA</h1> </tr>
                        <tr><td>{log.logs[2]}</td></tr>
                    </th>
                    <th>
                        <tr> <h1>TARİH</h1></tr>
                        <tr><td>{log.logs[3]}</td></tr>
                    </th>            
                </tbody>
            </table>
        )
    } else return null

}

export default LogsData
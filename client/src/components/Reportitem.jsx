import React from "react"

const Reportitem = ({issue}) => {
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{issue.category}</td>
                        <td>{issue.description}</td>
                        <td>{issue.status}</td>
                        <td>{issue.assigned_to}</td>
                        <td>{issue.dept}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Reportitem
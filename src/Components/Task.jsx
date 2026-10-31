 import "./Task.css"

  function Tasks(){
    return(
        <div className="task-table-card">
            <h3>All Tasks</h3>
            <table>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Assign To</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

        </div>
    )
  }
  export {Tasks}
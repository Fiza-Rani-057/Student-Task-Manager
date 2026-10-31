
import "./Task.css";

function Tasks({ tasks, onDelete, onComplete }) {
    return (
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
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.assignedTo}</td>
                            <td>{task.status}</td>
                            <td>
                                {task.status === "Pending" && (
                                    <button onClick={() => onComplete(task.id)}>
                                        Complete
                                    </button>
                                )}

                                <button onClick={() => onDelete(task.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export { Tasks };

import "./Form.css";
import { useState } from "react";

function Form({ onClose, onAddTask, users }) {
    const [task, setTask] = useState("");
    const [assignto, setAssignto] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) {
            alert("Please Enter a Task");
            return;
        }
        onAddTask({
            title: task,
            assignedTo: assignto,
            status: "Pending"
        })
        setTask("");
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Add new Task</h3>
                    <button type="button"
                        className="close-btn" onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <form className="task-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="taskTitle">Task Title</label>
                        <input type="text"
                            id="taskTitle" placeholder="Enter a Task"
                            value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskTitle">Assign To</label>
                        <select
                            id="assignTo" placeholder="Enter a Task"
                            value={assignto} onChange={(e) =>
                                setAssignto(e.target.value)} >
                        <option value="">Select User</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.name}>
                                {user.name}
                            </option>   
                        ))}
                        </select>
                    </div>
                    <div className="modal-actions">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose} >
                            Cancel
                        </button>
                        <button type="submit" className="submit-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export { Form }
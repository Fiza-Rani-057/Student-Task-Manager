
import "./Dashboard.css";
import { useState, useEffect } from "react";

import { Sidebar } from "../Components/Sidebar";
import { Charts } from "../Components/Charts";
import { Cards } from "../Components/Card";
import { Header } from "../Components/Header";
import { Tasks } from "../Components/Task";
import { Form } from "../Components/Form";
import { Users } from "../Components/Users";

function Dashboard() {
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUsers();
    }, []);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now() }]);
    };

    return (
        <div className="dashboard">
            <Sidebar onOpenModal={() => setShowForm(true)} />

            <div className="main">
                <Header />
                <Cards />
                <Charts />

                {showForm && (
                    <Form
                        onClose={() => setShowForm(false)}
                        onAddTask={addTask}
                        users={users}
                    />
                )}
                <Tasks tasks={tasks} />
                <Users users={users} />
            </div>
        </div>
    );
}
export { Dashboard };

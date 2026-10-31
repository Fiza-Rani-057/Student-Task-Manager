import "./Dashboard.css"
import { useState } from "react"
import { Sidebar } from "../Components/Sidebar"
import { Charts } from "../Components/Charts"
import { Cards } from "../Components/Card"
import { Header } from "../Components/Header"
import { Tasks } from "../Components/Task"
import { Form } from "../Components/Form"


function Dashboard() {
    const [showForm, setShowForm] = useState(false);
    const [tasks,setTasks] = useState([]);
    const addTask = (newTask)=>{
        setTasks([...tasks,{newTask, id:Date.now()}])
    }
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
                        onAddTask={{addTask}}
                        users={[]}
                    />
                )
                }
                <Tasks tasks = {tasks}/>
            </div>
        </div>
    )
}
export { Dashboard }
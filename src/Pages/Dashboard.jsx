 import { Sidebar } from "../Components/Sidebar"
 import { Charts } from "../Components/Charts"
 import { Cards } from "../Components/Card"
 import { Header } from "../Components/Header"
  import "./Dashboard.css"

  function Dashboard(){
  return(
    <div className="dashboard">
        <Sidebar/>
        <div className="main">
            <Header/>
            <Cards/>
            <Charts/>
        </div>
    </div>
  )
  }
  export {Dashboard}
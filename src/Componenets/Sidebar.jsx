 import "./Sidebar.css"
const Sidebar = ()=>{
  
return (
    <aside className="sidebar">

        {/* Logo */}
        <div className="sidebar-logo">
            <div className="logo-icon">T</div>

            <div className="logo-text">
                <h2>Task Manager</h2>
                <span>Manage Your Tasks</span>
            </div>
        </div>

        {/* Search */}
        <div className="sidebar-search">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search..." />
        </div>

        {/* Main Menu */}
        <div className="menu-category">MAIN MENU</div>

        <ul className="sidebar-menu">
            <li className="menu-item active">
                <span className="menu-icon">🏠</span>
                Dashboard
            </li>

            <li className="menu-item">
                <span className="menu-icon">📋</span>
                Tasks
            </li>

            <li className="menu-item">
                <span className="menu-icon">👥</span>
                Users
            </li>
        </ul>

        {/* Add Task Button */}
        <div className="sidebar-action">
            <button
                className="add-task-btn"
                // onClick={onOpenModal}
            >
                <span>+ ADD TASK</span>
                <span>+</span>
            </button>
        </div>

        {/* Profile */}
        <div className="sidebar-profile">
            <div className="profile-avatar">T</div>

            <div className="profile-info">
                <h4>Admin</h4>
                <p>Task Manager</p>
            </div>

            <span className="profile-arrow">⌄</span>
        </div>

    </aside>
);

 }
 export {Sidebar}
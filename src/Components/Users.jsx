
import "./Users.css";

function Users({ users }) {
    return (
        <div className="users-card">
            <div className="users-header">
                <h3>All Users</h3>
            </div>

            <div className="table-responsive">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="user-id">{user.id}</td>

                                <td className="user-name">
                                    <span className="user-avatar-small">
                                        {user.name[0]}
                                    </span>
                                    {user.name}
                                </td>

                                <td className="user-email">
                                    {user.email}
                                </td>

                                <td className="user-city">
                                    {user.address.city}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export { Users };

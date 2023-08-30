import { Link, useNavigate } from "react-router-dom";
import Logout from "../logout";

function AdminDashboard() {
    const navigate = useNavigate();
    
    return ( <>
        <h1>ADMIN DASHBOARD</h1>

        <Link to="/logout" className="btn btn-danger"  >Logout</Link>
    </> );
}

export default AdminDashboard;
import { Link, useNavigate } from "react-router-dom";
import Logout from "../logout";

function AdminDashboard() {
    const navigate = useNavigate();
    
    return ( <>
        <div style={{marginTop:"150px",marginLeft:"400px"}} class="card text-bg-light mb-3">
  <div class="card-header">
    <h1>Manage Books</h1>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>

        
    </> );
}

export default AdminDashboard;
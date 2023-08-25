import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { persistor } from "../features/persistore";



function Logout() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    dispatch(logout());
    persistor.purge();

    navigate('/');

    
}

export default Logout;
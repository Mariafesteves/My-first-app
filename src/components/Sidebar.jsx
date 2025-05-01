import { Link } from "react-router-dom";


function SideBar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
            <Link to="/"> Home  </Link>
            <Link to="/about"> About </Link>
            <Link to="/addItems"> Create new recipes </Link>
            </div>
        </nav>
    );
}

export default SideBar;
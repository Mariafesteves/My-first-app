import { Link } from "react-router-dom";

function SideBar() {
    console.log("Sidebar is rendering");
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/addItems">Add New Items</Link>
        </nav>
    );
}

export default SideBar;
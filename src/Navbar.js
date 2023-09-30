import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">    
            <home className="navhome">
                <Link to="/Portfolio-Project" className="site-home">Graham Klingler</Link>
            </home>
            <ul className="portfolio-links">
                <li>
                    <Link to="/Portfolio-Project/cars" styles="margin-right: 2%">Cars</Link>
                </li>
                <li>
                    <Link to="/Portfolio-Project/street">Street</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
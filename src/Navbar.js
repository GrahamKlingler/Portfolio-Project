import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">    
            <home className="navhome">
                <Link to="/Portfolio-Project" className="site-home">Graham Klingler</Link>
            </home>
            <ul className="portfolio-links">
                <li>
                    <Link to="/Portfolio-Project/bio" style={{ paddingRight: "40px" }}>About</Link>
                </li>
                <li className="dropdown" style={{ paddingLeft: "10px" }}>
                    <button className="droplink" >Collections</button>
                    <div className="dropdown-menu">
                        <li>
                            <Link style={{ color: "black" }} to="/Portfolio-Project/bridges">Bridges</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/Portfolio-Project/cars">Cars</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/Portfolio-Project/skylines">Skylines</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/Portfolio-Project/buildings">Buildings</Link>
                        </li>
                        <li>
                            <Link style={{ color: "black" }} to="/Portfolio-Project/street">Street</Link>
                        </li>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
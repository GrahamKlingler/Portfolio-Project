import { Link } from "react-router-dom";

function Navbar() {
    document.addEventListener("mouseover", (e) => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]");
        const isDropdown = e.target.closest("[data-dropdown]");
      
        if (!isDropdownButton && !isDropdown) {
          // Close all dropdowns when mouse leaves the common ancestor
          const dropdowns = document.querySelectorAll("[data-dropdown].active");
          dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("active");
          });
        } else if (isDropdownButton && isDropdown) {
          // Open the dropdown when the button is hovered over
          isDropdown.classList.add("active");
        }
      });

    return (
        <div className="navbar">    
            <home className="navhome">
                <Link to="/Portfolio-Project" className="site-home">GRAHAM KLINGLER</Link>
            </home>
            <ul className="portfolio-links">
                <li >
                    <Link to="/Portfolio-Project/bio">ABOUT</Link>
                </li>
                <li className="dropdown" style={{ paddingLeft: "10px" } } data-dropdown>
                    <button className="droplink" data-dropdown-button>COLLECTIONS</button>
                    <div className="dropdown-menu" data-dropdown-menu>
                        <li>
                            <Link to="/Portfolio-Project/bridges">bridges</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio-Project/automobiles">autos</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio-Project/skylines">skylines</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio-Project/architecture">architecture</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio-Project/urban">urban</Link>
                        </li>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
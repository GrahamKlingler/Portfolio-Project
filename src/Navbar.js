function Navbar() {
    return (
        <div className="navbar">    
            <home className="navhome">
                <a href="/Portfolio-Project" className="site-home">Graham Klingler</a>
            </home>
            <ul className="links">
                <li>
                    <a href="/Portfolio-Project/cars" styles="margin-right: 2%">Cars</a>
                </li>
                <li>
                    <a href="/Portfolio-Project/street">Street</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
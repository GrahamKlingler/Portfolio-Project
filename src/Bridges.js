import Gallery from "./Gallery.js";
import Navbar from "./Navbar.js";

function Bridges() {
    const pathname = window.location.pathname;
    var folder = require.context(`./img/bridges/small/`, false);
    var images = folder.keys().map(img => folder(img));
    return (
    <div className="gallery-pg">
        <Navbar />
        <h1 className="gallery-name">bridges</h1>
        <Gallery pathname={pathname} images={images}/>
    </div>
    );
}

export default Bridges;
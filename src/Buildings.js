import Gallery from "./Gallery.js";
import Navbar from "./Navbar.js";

function Buildings() {
    const pathname = window.location.pathname;
    var folder = require.context(`./img/buildings/small/`, false);
    var images = folder.keys().map(img => folder(img));
    return (
    <div className="gallery-pg">
        <Navbar />
        <h1 className="gallery-name">architecture</h1>
        <Gallery pathname={pathname} images={images}/>
    </div>
    );
}

export default Buildings;
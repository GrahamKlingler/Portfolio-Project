import Gallery from "./Gallery.js";
import Navbar from "./Navbar";

function Street() {
    const pathname = window.location.pathname;
    var folder = require.context(`./img/street/`, false);
    var images = folder.keys().map(img => folder(img));
    return (
        <div className="street">
            <Navbar />    
            <h1 className="gallery-name">Street Photos</h1>
            <Gallery pathname={pathname} images={images}/>
        </div>
    );
}

export default Street;
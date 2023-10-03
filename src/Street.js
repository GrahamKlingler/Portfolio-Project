import Gallery from "./Gallery.js";
import Navbar from "./Navbar";

function Street() {
    const pathname = window.location.pathname;
    var folder = require.context(`./img/street/small/`, false);
    var smallFolder = require.context(`./img/street/tiny`, false);
    var images = folder.keys().map(img => folder(img));
    var smalls = smallFolder.keys().map(img => smallFolder(img))
    return (
        <div className="gallery-pg">
            <Navbar />
            <h1 className="gallery-name">urban</h1>
            <Gallery pathname={pathname} images={images} smalls={smalls}/>
        </div>
    );
}

export default Street;
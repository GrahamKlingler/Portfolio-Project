import Gallery from "./Gallery.js";
import Navbar from "./Navbar.js";

function Cars() {
    const pathname = window.location.pathname;
    var folder = require.context(`./img/cars/`, false);
    var images = folder.keys().map(img => folder(img));
    return (
    <div className="cars">
        <Navbar />
        <h1 className="gallery-name">Car Photos</h1>
        <Gallery pathname={pathname} images={images}/>
    </div>
    );
}

export default Cars;
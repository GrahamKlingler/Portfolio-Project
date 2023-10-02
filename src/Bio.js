import Navbar from "./Navbar";

function Bio() {
    return (
        <div className="bio">
            <Navbar />
            <div style={{ display: "inline-block", transform: "translateY(-200px)", boxSizing: "border-box", paddingLeft: "4%", marginRight: "4%", alignItems: "center" }}>
                <h1 style={{ letterSpacing: ".3rem", fontFamily: "Comfortaa-Light", color: "var(--main-text)", fontSize: "80px"}}>About</h1>
                <span style={{ backgroundColor: "rgba(10, 10, 10, .7)", fontSize: "30px", fontFamily:"Chivo", color: "var(--hover-text)" }}>I am a photographer and student studying Computer Engineering at University of California Santa Cruz. In 2018, my grandfather introduced me to photography. I got my first camera 1 year later, and since then it has been one of my favorite hobbies. In highschool, I was the sports photographer for the Acalanes Blueprint, our student paper. However, I prefer to take pictures of architecture and cars, and my pictures have amassed over 10 million views on Unsplash.com. I have been interested in learning React for a while, so I started building this website to gain some experience and to have a convienient space for me to share my photos.</span>
            </div>
        </div>
    );
}

export default Bio;
import Navbar from "./Navbar";

function Bio() {
    return (
        <div className="bio">
            <Navbar />
            <span style={{ display: "inline-block", transform: "translateY(-50px)", boxSizing: "border-box", paddingLeft: "4%", marginRight: "4%", alignItems: "center" }}>
                <span style={{ marginTop: "0px", letterSpacing: "1.3rem", fontFamily: "Gotham-Light", color: "var(--main-text)", fontSize: "80px" }}>about</span>
                <p style={{ letterSpacing: ".1rem", backgroundColor: "rgba(10, 10, 10, .7)", fontSize: "25px", fontFamily:"Gotham-Light", color: "rgb(246, 199, 76)" }}>I am a photographer and student studying Computer Engineering at University of California Santa Cruz. In 2018, my grandfather introduced me to photography. I got my first camera 1 year later, and since then it has been one of my favorite hobbies. In high school, I was the sports photographer for the Acalanes Blueprint, our student paper. However, I prefer to take pictures of architecture and cars, and my pictures have amassed over 10 million views on Unsplash.com. I have been interested in learning React for a while, so I started building this website to gain some experience and to have a convenient space to share my photos.</p>
            </span>
        </div>
    );
}

export default Bio;
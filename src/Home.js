import { Parallax } from "react-parallax";
import profile_pic from "./img/profile-picture.jpg";
import main from "./img/main-background.jpg";
import car from "./img/car-background.jpg";
import bridge from "./img/bridge-background.jpg";
import skyline from "./img/skyline-background.jpg";
import ggbridge from "./img/ggbridge-background.jpg";
import building from "./img/building-background.jpg";
import street from "./img/street-background.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Section(props) {
    return (
        <Parallax className="home-section" strength={props.strength} bgImage={props.img}>
                <div className="portfolio-text">
                    <p className="portfolio-title">{props.title}</p>
                    <Link className="portfolio-link" to={"/Portfolio-Project/" + props.section}>view</Link>
                </div>
        </Parallax>
    )
}

function Home() {
    var parallaxStrength = 300;

    return (
        <div className="home">
            <Parallax strength={parallaxStrength} bgImage={main} style={{ height: '110vh', position: "static", justifyContent: "center" }}>
                <Parallax strength={1500}>
                    <Navbar />
                </Parallax>    
            </Parallax>

            <Section strength={parallaxStrength} img={bridge} title="Bridges" section="bridges"/>

            <Section strength={parallaxStrength} img={car} title="Cars" sections="cars"/>

            <Section strength={parallaxStrength} img={skyline} title="Skylines" sections="skylines"/>

            <Section strength={parallaxStrength} img={building} title="Buildings" sections="buildings"/>

            <Section strength={parallaxStrength} img={street} title="Street" sections="street"/>

            <Parallax strength={parallaxStrength} bgImage={ggbridge} style={{ height: '100vh'}}>
                <div className="about">
                <li>
                        <img style={{marginLeft: "15vw", marginTop: "100px",width: 200, height: 200, objectFit: "cover", borderRadius: 100}} src={profile_pic} alt="Profile"></img>
                    </li>
                    <li>
                    <div className="about-main">
                        <p style={{ pointerEvents: "none", transform: "translateY(30px)", paddingBottom: "5px" }} className="portfolio-title">About</p>
                        <Link style={{ marginLeft: "-130px" }}className="portfolio-link" to="/Portfolio-Project/bio">view</Link>
                </div>    
                    </li>
                </div>
            </Parallax>

            <div className="bottom-page-home">
                <h1 style={{ textAlign: "center", letterSpacing: ".3rem", fontFamily: "Comfortaa-Light"}}>Contact</h1>
                <p style={{ textAlign: "center", transform: "translateY(.5vh)", paddingBottom: "15px" }}>(925) 999-0165 | grahamklingler@gmail.com | gklingle@ucsc.edu</p>
            </div>


        </div>
    );
}

export default Home;
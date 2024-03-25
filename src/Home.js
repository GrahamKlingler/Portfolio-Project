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
            <Parallax className="homeStart" strength={parallaxStrength} bgImage={main}>
                <Parallax strength={1500}>
                    <Navbar />
                </Parallax>    
            </Parallax>

            <Section strength={parallaxStrength} img={bridge} title="Bridges" section="bridges"/>

            <Section strength={parallaxStrength} img={car} title="Automobiles" section="automobiles"/>

            <Section strength={parallaxStrength} img={skyline} title="Skylines" section="skylines"/>

            <Section strength={parallaxStrength} img={building} title="Architecture" section="architecture"/>

            <Section strength={parallaxStrength} img={street} title="Urban" section="urban"/>

            <Parallax className="about-p" strength={parallaxStrength} bgImage={ggbridge}>
            <div className="about">
                <li>
                        <img className="abt-pfp" src={profile_pic} alt="Profile"></img>
                    </li>
                    <li>
                    <div className="about-main">
                        <p className="portfolio-title">About</p>
                        <Link className="portfolio-link" to="/Portfolio-Project/bio">view</Link>
                </div>    
                    </li>
            </div>
            </Parallax>

            <div className="bottom-page-home">
                <h1>Contact</h1>
                <p>(925) 999-0165 | grahamklingler@gmail.com | gklingle@ucsc.edu</p>
            </div>


        </div>
    );
}

export default Home;
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

function Home() {


    return (
        <div className="home">
            <Parallax strength={600} bgImage={main} style={{ height: '110vh' }}>
                <Parallax strength={1500}>
                    <Navbar />
                </Parallax>    
            </Parallax>
            
            <Parallax strength={600} bgImage={bridge} style={{ height: '70vh'}}>
                <div className="portfolio-text">
                    <p className="portfolio-title">Bridges</p>
                    <Link className="portfolio-link" to="/Portfolio-Project/bridges">view</Link>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={car} style={{ height: '70vh'}}>
                <div className="portfolio-text">
                    <p className="portfolio-title">Cars</p>
                    <Link className="portfolio-link" to="/Portfolio-Project/cars">view</Link>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={skyline} style={{ height: '70vh'}}>
                <div className="portfolio-text">
                        <p className="portfolio-title">Skylines</p>
                        <Link className="portfolio-link" to="/Portfolio-Project/skylines">view</Link>
                </div>             
            </Parallax>

            <Parallax strength={600} bgImage={building} style={{ height: '70vh'}}>
                <div className="portfolio-text">
                        <p className="portfolio-title">Buildings</p>
                        <Link className="portfolio-link" to="/Portfolio-Project/buildings">view</Link>
                </div>             
            </Parallax>

            <Parallax strength={600} bgImage={street} style={{ height: '70vh'}}>
                <div className="portfolio-text">
                        <p className="portfolio-title">Street</p>
                        <Link className="portfolio-link" to="/Portfolio-Project/street">view</Link>
                </div>             
            </Parallax>

            <Parallax strength={600} bgImage={ggbridge} style={{ height: '100vh'}}>
                <div className="about">
                <li>
                        <img style={{marginLeft: "15vw", marginTop: "100px",width: 200, height: 200, objectFit: "cover", borderRadius: 100}} src={profile_pic} alt="Profile"></img>
                    </li>
                    <li>
                    <div className="about-main">
                        <p style={{ transform: "translateY(40px)" }} className="portfolio-title">About</p>
                        <Link style={{ padding: "none", margin: "none" }}className="portfolio-link" to="/Portfolio-Project/bio">view</Link>
                </div>    
                    </li>
                </div>
            </Parallax>

            <div className="bottom-page-home" style={{ marginTop: "auto", paddingTop: "1vh", backgroundColor: "white", height: "15vh"}}>
                <h1 style={{ textAlign: "center", letterSpacing: ".3rem", fontFamily: "Comfortaa-Light"}}>Contact</h1>
                <p style={{ textAlign: "center", transform: "translateY(.5vh)" }}>(925) 999-0165 | grahamklingler@gmail.com | gklingle@ucsc.edu</p>
            </div>


        </div>
    );
}

export default Home;
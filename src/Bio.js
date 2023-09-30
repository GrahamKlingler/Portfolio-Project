import { Parallax } from "react-parallax";
import profile_pic from "./img/profile-picture.jpg";
import background1 from "./img/main-background.jpg";
import background2 from "./img/background2.jpg";
import background3 from "./img/background3.jpg";
import Navbar from "./Navbar";

function Bio() {
    return (
        <div className="bio">
            <Parallax strength={600} bgImage={background1} style={{ height: '110vh' }}>
                <Parallax strength={1500}>
                    <Navbar />
                </Parallax>    
            </Parallax>
            
            <Parallax strength={600} bgImage={background2} style={{ height: '70vh'}}>
                <div className="resume">
                    <li>
                        <img style={{marginLeft: 25, width: 100, height: 100, objectFit: "cover", borderRadius: 60}} src={profile_pic} alt="Profile"></img>
                    </li>
                    <li>
                        <p style={{marginRight: 25}}>Hi! My name is Graham, and I am a 19 year old photographer and a computer engineering student at UC Santa Cruz. I have been taking photos for 6 years, and I shoot with a Canon EOS R and a Sigma 28-70mm lens.</p>
                    </li>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={background3} style={{ height: '100vh'}}>
                <div className="about">

                </div>
            </Parallax>
        </div>
    );
}

export default Bio;
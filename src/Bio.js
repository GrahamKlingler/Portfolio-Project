import profile_pic from "./img/profile-picture.jpg";
import Navbar from "./Navbar";

function Bio() {
    return (
        <div className="bio">
            <Navbar />
            <div className="resume">
                <li>
                    <img style={{marginLeft: 25, width: 100, height: 100, objectFit: "cover", borderRadius: 60}} src={profile_pic} alt="Profile"></img>
                </li>
                <li>
                    <p style={{marginRight: 25}}>Hi! My name is Graham, and I am a 19 year old photographer and a computer engineering student at UC Santa Cruz. I have been taking photos for 6 years, and I shoot with a Canon EOS R and a Sigma 28-70mm lens.</p>
                </li>
            </div>
        </div>
    );
}

export default Bio;
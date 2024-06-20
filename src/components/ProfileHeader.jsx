import './profileHeader.css';
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";

const ProfileHeader = () => {
    return (
        <div className="header">
            <div className="social-icons">
                <a href="https://x.com/geeky_adx" id="icon1"><FaSquareXTwitter className="icons" size={25} /></a>
                <a href="https://www.linkedin.com/in/anuj-das-10/" id="icon2"><FaLinkedin className="icons" size={25} /></a>
                <a href="https://www.github.com/anuj-das-10" id="icon3"><FaSquareGithub className="icons" size={25} /></a>
                <a href="https://www.instagram.com/anuj_das_ad/" id="icon4"><FaSquareInstagram className="icons" size={25} /></a>
                <a href="https://www.facebook.com/anujdas.ad.10" id="icon5"><FaSquareFacebook className="icons" size={25} /></a>
            </div>
            <img src="dp.jpg" />
            <div className="bio">            
                <h1>Hello, I am <span>Anuj Das</span></h1>
                <p>Full Stack Developer</p>
                <h3><span id="skill">Skills: &nbsp;</span> 
                    <span>MERN</span>&nbsp;
                    <span>Next.JS</span>&nbsp; 
                    <span>Headless CMS</span>&nbsp; 
                    <span>Django</span>&nbsp; 
                    <span>Java</span>
                </h3>
            </div>
        </div>
    )
}

export default ProfileHeader;
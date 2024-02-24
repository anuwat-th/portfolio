import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getText } from "../constants/components/FooterText";

import "../styles/global/Global.scss"
import "../styles/components/FooterStyle.scss"


const Footer = () => {
    const language = useSelector((state: RootState) => state.language.language);

    const openLinkedInNewTab = () => {
        window.open('https://www.linkedin.com/in/anuwat-thongkham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
    };

    const openFacebookNewTab = () => {
        window.open('https://m.facebook.com/profile.php', '_blank');
    };

    const openGithubNewTab = () => {
        window.open('https://github.com/anuwat-th', '_blank');
    };
    return (
        < div className="footer" >
            <div className="footer-text-container">
                <p className={`footer-text ${language}`}>{getText("footerText")}</p>
            </div>
            <div className="footer-link-container">
                <button className="footer-link-icon linkedin" onClick={openLinkedInNewTab}></button>
                <button className="footer-link-icon facebook" onClick={openFacebookNewTab}></button>
                <button className="footer-link-icon github" onClick={openGithubNewTab}></button>
            </div>
        </div >
    );
}

export default Footer;
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getText } from "../constants/components/FooterText";

import "../styles/global/global.scss"
import "../styles/components/FooterStyle.scss"


const Footer = () => {
    const language = useSelector((state: RootState) => state.language.language);
    return (
        < div className="footer" >
            <div className="footer-text-container">
                <p className={`footer-text ${language}`}>{getText("footerText")}</p>
            </div>
            <div className="footer-link-container">
                <button className="footer-link-icon linkedin"></button>
                <button className="footer-link-icon figma"></button>
                <button className="footer-link-icon github"></button>
            </div>
        </div >
    );
}

export default Footer;
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getText } from "../constants/components/HomePageHeroSectionText";


import "../styles/global/Global.scss"
import "../styles/components/HomePageHeroSectionStyle.scss"

const HomePageHeroSection = () => {


    const language = useSelector((state: RootState) => state.language.language);
    return (
        <div className="hero-section">
            <p className={`intro-text ${language}`}>{getText('introText')}</p>
            <h1 className={`my-name-text ${language}`}>{getText('myNameText')}</h1>
            <p className={`description-text ${language}`}>{getText('descriptionText')}</p>
            <hr className="hero-line" />
            <div className="hero-graphic-container">
                <span className="hero-graphic"></span>
                <span className="hero-graphic"></span>
            </div>
        </div>
    )
}
export default HomePageHeroSection;
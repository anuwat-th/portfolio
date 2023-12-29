import { useDispatch, useSelector } from "react-redux";
import { getText } from "../constants/screens/HomePageText";
import { setLanguage } from "../redux/reducers/languageReducer";
import { RootState } from "../redux/store/store";

import "../styles/global/global.scss"
import "../styles/pages/HomePage.scss"

import PrimaryIcon from "../components/PrimaryIcon";
import Footer from "../components/Footer";

const HomePage = () => {

    const language = useSelector((state: RootState) => state.language.language);

    const dispatch = useDispatch();

    const changeLanguage = (newLanguage: string) => {
        dispatch(setLanguage(newLanguage));
    };

    return (
        <div className="home-page">

            <div className="home-page-container">
                <div className="hero-section">
                    <div className="hero-wrapper">
                        <div className="hero-header-container">
                            <h1 className={`hero-header-text ${language}`}>{getText("heroText")}</h1>
                        </div>
                        <div className="hero-description-container">
                            <h1 className={`hero-description-text ${language}`}>{getText("heroDescriptionText")}</h1>
                        </div>
                        <div className="hero-button-container">
                            <button className={`hero-button ${language}`}>{getText("heroButton")}</button>
                        </div>
                    </div>
                    <div className="hero-graphic-container">
                        <div className="hero-graphic" data-set="hero-graphic-1"></div>
                        <div className="hero-graphic" data-set="hero-graphic-2"></div>
                    </div>
                </div>
                <div className="profile-section">
                    <div className="profile-wrapper">
                        <div className="profile-bio-container">
                            <div className="profile-bio-primary-container">
                                <p className={`profile-bio-primary-text ${language}`}>{getText("bioPrimaryText")}</p>
                            </div>
                            <div className="profile-bio-name-container">
                                <h2 className={`profile-bio-name-text ${language}`}>{getText("bioNameText")}</h2>
                            </div>
                            <div className="profile-bio-content-container">
                                <p className={`profile-bio-content-text-1  ${language}`}>{getText("bioContent1Text")}</p>
                                <p className={`profile-bio-content-text-2  ${language}`}>{getText("bioContent2Text")}</p>
                            </div>
                        </div>
                        <div className="profile-skill-container">
                            <div className="profile-skill-title-1-container">
                                <p className={`profile-skill-title-text  ${language}`}>{getText("bioToolTitle1Text")}</p>
                            </div>
                            <div className="icon-component-container">
                                <PrimaryIcon iconName="figma" />
                                <PrimaryIcon iconName="github" />
                            </div>
                            <div className="profile-skill-title-2-container">
                                <p className={`profile-skill-title-text ${language}`}>{getText("bioToolTitle2Text")}</p>
                            </div>
                            <div className="icon-component-container">
                                <PrimaryIcon iconName="react" />
                                <PrimaryIcon iconName="html" />
                                <PrimaryIcon iconName="css" />
                                <PrimaryIcon iconName="javascript" />
                                <PrimaryIcon iconName="typescript" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contract-section">
                    <div className="contract-wrapper">
                        <div className="contract-header-container">
                            <h2 className={`contract-header-text ${language}`}>{getText("contractHeaderText")}</h2>
                        </div>

                        <div className="contract-description-container">
                            <p className={`contract-description-text ${language}`}>{getText("contractDescriptionText")}</p>
                        </div>
                        <div className="contract-button-container">
                            <button className={`contract-button ${language}`}>{getText("contractButton")}</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("th")}>Thai</button>
        </div>
    );
}
export default HomePage;
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../constants/screens/HomePageText";
import { setLanguage } from "../redux/reducers/languageReducer";
import { RootState } from "../redux/store/store";
import "../styles/global/global.scss"
import "../styles/pages/HomePage.scss"
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
                            <h1 className={`hero-description-text ${language}`}>{getText("heroDescription")}</h1>
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
            </div>

            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("th")}>Thai</button>
        </div>
    );
}
export default HomePage;
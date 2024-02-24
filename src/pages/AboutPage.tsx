import { useSelector } from "react-redux";

import { RootState } from "../redux/store/store";

import { getText } from "../constants/pages/AboutPageText";



import Navbar from "../components/Navbar"

import Footer from "../components/Footer";



import '../styles/global/Global.scss'
import '../styles/pages/AboutPageStyle.scss'

import ChangeLanguage from "../components/ChangeLanguage";
import resume from '../assets/docs/Resume.pdf'
const AboutPage = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const openResumeNewTab = () => {
        window.open(resume, '_blank');
    };
    return (
        <div className="about-page">
            <Navbar />
            <ChangeLanguage/>
            <div className="about-page-container">
                <h1 className={`title-text ${language}`}>{getText('titleText')}</h1>
                <hr className="title-line" />
                <div className="content-container">
                    <p className={`description-text ${language}`}>{getText('descriptionText')}</p>
                    <button onClick={openResumeNewTab} className={`resume-button  ${language}`}>{getText('buttonText')}</button>
                </div>
                <div className="passion-section">
                    <h1 className={`passion-text ${language}`}>{getText('passionText')}</h1>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutPage;
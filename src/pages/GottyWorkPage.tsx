
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getText } from "../constants/pages/GottyPageText"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import ChangeLanguage from "../components/ChangeLanguage";

import '../styles/global/Global.scss'
import '../styles/pages/GottyWorkPageStyle.scss'

import image from '../assets/images/gotty.png'

import githubIcon from '../assets/icons/github-1.png'
import figmaIcon from '../assets/icons/figma-1.png'

import video from '../assets/videos/gotty-video.mp4'
const GottyWorkPage = () => {

    const language = useSelector((state: RootState) => state.language.language);

    const openGithubNewTab = () => {
        window.open('https://github.com/anuwat-th/Gotty.git', '_blank');
    };

    const openFigmaNewTab = () => {
        window.open('https://www.figma.com/file/irWUUbljCJuZecI2Tq2qvR/Gotty?type=design&node-id=8%3A45&mode=design&t=YTLCtVcfp0DVChDA-1', '_blank');
    };

    return (
        <div className="gotty-work-page">
            <Navbar />
            <ChangeLanguage />
            <div className="gotty-work-page-container">
                <p className={`hint-text ${language}`}>{getText('hintText')}</p>
                <h1 className="title-text">Gotty</h1>
                <p className={`sub-title-text ${language}`}>{getText('subTitleText')}</p>
                <div className="image-container">
                    <img src={image} alt="Ryuzu page" />
                </div>
                <p className={`description-text ${language}`}>{getText('descriptionText')}</p>
                <div className="video-container">
                    <video src={video} controls/>
                </div>
                <div className="button-section">
                    <button className="button-container" onClick={openGithubNewTab}>
                        <img src={githubIcon} alt="Github Icon" />
                        <p>Open Github</p>
                    </button>
                    <button className="button-container" onClick={openFigmaNewTab}>
                        <img src={figmaIcon} alt="Figma Icon" />
                        <p>Open Figma</p>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default GottyWorkPage;
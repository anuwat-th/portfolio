
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getText } from "../constants/pages/RyuzuPageText"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import ChangeLanguage from "../components/ChangeLanguage";

import '../styles/global/Global.scss'
import '../styles/pages/RyuzuWorkPage.scss'

import image from '../assets/images/ryuzu-1.png'

import githubIcon from '../assets/icons/github-1.png'
import figmaIcon from '../assets/icons/figma-1.png'

import video from '../assets/videos/ryuzu-video.mp4'
const RyuzuWorkPage = () => {
    const language = useSelector((state: RootState) => state.language.language);

    const openGithubNewTab = () => {
        window.open('https://github.com/anuwat-thongkham/Ryuzu.git', '_blank');
    };

    const openFigmaNewTab = () => {
        window.open('https://www.figma.com/file/bICMolbtksecguq9BmfIDx/Pre-Order-Project?type=design&node-id=0%3A1&mode=design&t=N2PkTzAeeE2UKrIv-1', '_blank');
    };
    
    return (
        <div className="ryuzu-work-page">
            <Navbar />
            <ChangeLanguage />
            <div className="ryuzu-work-page-container">
                <p className={`hint-text ${language}`}>{getText('hintText')}</p>
                <h1 className="title-text">Ryuzu</h1>
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
export default RyuzuWorkPage;

import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { getText } from "../constants/components/HomePageProfileSectionText";


import "../styles/global/Global.scss"
import "../styles/components/HomePageProfileSectionStyle.scss"
const HomePageProfileSection = () => {

    const language = useSelector((state: RootState) => state.language.language);
    return (
        <div className="profile-section">
            <div className="profile-section-wrapper">
                <span className="profile-image"></span>
                <h2 className={`intro-text ${language}`}>{getText('introText')}</h2>
                <div className="content-container">
                    <p className={`content-text ${language}`}>{getText('content1Text')}</p>
                    <p className={`content-text ${language}`}>{getText('content2Text')}</p>
                </div>
                <h3 className={`skill-text ${language}`}>{getText('skillText')}</h3>
                <div className="skill-box-container">
                    <div className="skill-box">
                        <p className="skill-header">Programing Languages</p>
                        <ul className="skill">
                            <li className="skill-list">JavaScript</li>
                            <li className="skill-list">TypeScript</li>
                            <li className="skill-list">HTML</li>
                            <li className="skill-list">CSS</li>
                            <li className="skill-list">Sass</li>
                        </ul>
                    </div>
                    <div className="skill-box">
                        <p className="skill-header">Tools & Platforms</p>
                        <ul className="skill">
                            <li className="skill-list">Figma</li>
                            <li className="skill-list">Git</li>
                            <li className="skill-list">Github</li>
                            <li className="skill-list">Netlify</li>
                            <li className="skill-list">Firebase</li>
                        </ul>
                    </div>
                    <div className="skill-box">
                    <p className="skill-header">Frameworks & Librariess</p>
                        <ul className="skill">
                            <li className="skill-list">React</li>
                            <li className="skill-list">React Native</li>
                            <li className="skill-list">Redux</li>
                            <li className="skill-list">Route</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePageProfileSection;
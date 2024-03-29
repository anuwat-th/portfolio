

import "../styles/global/Global.scss"

import Footer from "../components/Footer";
import ChangeLanguage from "../components/ChangeLanguage";
import Navbar from "../components/Navbar";
import HomePageHeroSection from "../components/HomePageHeroSection";
import HomePageProfileSection from "../components/HomePageProfileSection";

const HomePage = () => {


    return (
        <div className="home-page">
            <div className="home-page-container">
                <Navbar />
                <ChangeLanguage />
                <HomePageHeroSection/>
                <HomePageProfileSection/>
                {/* <div className="hero-section">
                    <div className="hero-title-container">
                        <h1 className={`hero-title-text ${language}`}>{getText('heroTitle1Text')}</h1>
                        <h1 className={`hero-title-text ${language}`}>{getText('heroTitle2Text')}</h1>
                    </div>
                    <div className="hero-description-container">
                        <p className={`hero-description-text ${language}`}>{getText('heroDescription1Text')}</p>
                        <p className={`hero-description-text ${language}`}>{getText('heroDescription2Text')}</p>
                    </div>
                    <span className="hero-vector"></span>
                    <div className="hero-button-container">
                        <Link className="hero-button" to={'/'}><p className={`hero-button-text ${language}`}>{getText('heroButton')}</p></Link>
                    </div>
                </div> */}
                <Footer/>
            </div>
        </div>
    );
}
export default HomePage;
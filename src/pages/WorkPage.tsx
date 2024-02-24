import { useSelector } from "react-redux";

import { RootState } from "../redux/store/store";

import { getText } from "../constants/pages/WorkPageText";



import ChangeLanguage from "../components/ChangeLanguage";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import WorkCard from "../components/WorkCard";



import "../styles/global/Global.scss"

import "../styles/pages/WorkPageStyle.scss"

import work1Image from '../assets/images/ryuzu.png'

import work2Image from '../assets/images/gotty.png'

const WorkPage = () => {

    const language = useSelector((state: RootState) => state.language.language);

    

    return (

        <div className="work-page">

            <Navbar />

            <ChangeLanguage />

            <div className="work-page-container">

                <h1 className={`title-text ${language}`}>{getText('titleText')}</h1>

                <hr className="title-line" />

                <h1 className={`description-text ${language}`}>{getText('descriptionText')}</h1>

                <div className="work-section">

                    <WorkCard title={getText('work1Title')} description={getText('work1Description')} detail={getText('detailText')} detailLink={'/ryuzu-work'} imageDisplay={work1Image}/>

                    <WorkCard title={getText('work2Title')} description={getText('work2Description')} detail={getText('detailText')} detailLink={'/gotty-work'} imageDisplay={work2Image}/>

                </div>

            </div>

            <Footer/>

        </div>

    );

}



export default WorkPage;
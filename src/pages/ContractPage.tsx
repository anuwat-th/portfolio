import { useSelector } from "react-redux";

import { RootState } from "../redux/store/store";

import { getText } from "../constants/pages/ContractPageText";



import Navbar from "../components/Navbar"

import Footer from "../components/Footer";



import '../styles/global/Global.scss'

import '../styles/pages/ContractPageStyle.scss'

import ChangeLanguage from "../components/ChangeLanguage";



const ContractPage = () => {



    const language = useSelector((state: RootState) => state.language.language);

    return (

        <div className="contract-page">

            <Navbar />

            <ChangeLanguage/>

            <div className="contract-page-container">

                <p className={`coming-soon-text ${language}`}>{getText('comingSoonText')}</p>

            </div>

            <Footer />

        </div>

    )

}

export default ContractPage
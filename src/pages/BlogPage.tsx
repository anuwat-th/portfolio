import { useSelector } from "react-redux";

import { RootState } from "../redux/store/store";

import { getText } from "../constants/pages/BlogPageText";



import Navbar from "../components/Navbar"

import Footer from "../components/Footer";



import '../styles/global/Global.scss'

import '../styles/pages/BlogPageStyle.scss'

import ChangeLanguage from "../components/ChangeLanguage";



const BlogPage = () => {



    const language = useSelector((state: RootState) => state.language.language);

    return (

        <div className="blog-page">

            <Navbar />

            <ChangeLanguage/>

            <div className="blog-page-container">

                <p className={`coming-soon-text ${language}`}>{getText('comingSoonText')}</p>

            </div>

            <Footer />

        </div>

    )

}

export default BlogPage;
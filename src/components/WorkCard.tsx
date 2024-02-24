import { useSelector } from "react-redux";

import { RootState } from "../redux/store/store";

import { Link } from "react-router-dom";



import '../styles/global/Global.scss'

import '../styles/components/WorkCardStyle.scss'

interface WorkCardProp {

    title: string;

    description: string;

    detail: string;

    detailLink: string;

    imageDisplay: string;

}



const WorkCard: React.FC<WorkCardProp> = ({ title, description, detail, detailLink, imageDisplay }) => {

    const language = useSelector((state: RootState) => state.language.language);

    return (

        <div className="work-card">

            <div className="work-card-container">

                <img src={imageDisplay} alt="" className="work-image" />

                <h3 className={`work-titlet-text ${language}`}>{title}</h3>

                <p className={`work-description-text ${language}`}>{description}</p>

                <Link className={`work-detail-text ${language}`} to={detailLink}>{detail}</Link>

            </div>

        </div >

    );

}



export default WorkCard;
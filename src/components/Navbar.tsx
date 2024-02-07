import { Link } from "react-router-dom";

import "../styles/global/global.scss"
import "../styles/components/NavbarStyle.scss"
import { getText } from "../constants/components/NavbarText";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";


const Navbar = () => {
    const language = useSelector((state: RootState) => state.language.language);
    return (
        <div className="navbar">
            <div className="large-navbar">
                <div className="large-navbar-wrapper">
                    <Link to={"/"} className="large-navbar-logo"></Link>
                    <button className={`large-navbar-button ${language}`}>{getText("navbarButton")}</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
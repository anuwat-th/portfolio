import { Link } from "react-router-dom";

import "../styles/global/Global.scss"
import "../styles/components/NavbarStyle.scss"
import { getText } from "../constants/components/NavbarText";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useEffect, useState } from "react";


const Navbar = () => {

    const language = useSelector((state: RootState) => state.language.language);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const sideBarMenu = (): string => isSideBarOpen ? 'open' : 'close';

    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
        document.body.style.overflow = isSideBarOpen ? 'auto' : 'hidden';
    };

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 512) {
                document.body.style.overflow = 'auto';
                setIsSideBarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="navbar">
            <div className={`large-navbar`}>
                <div className='large-navbar-wrapper'>
                    <Link to={"/"} className={`large-navbar-logo `}></Link>
                    <Link to={"/"} className={`large-navbar-link ${language}`}>{getText('aboutLink')}</Link>
                    <Link to={"/"} className={`large-navbar-link  ${language}`}>{getText('workLink')}</Link>
                    <Link to={"/"} className={`large-navbar-link  ${language}`}>{getText('blogLink')}</Link>
                    <Link to={"/"} className={`large-navbar-link  ${language}`}>{getText('contractLink')}</Link>
                </div>
            </div>
            <div className={`small-navbar`}>
                <div className="small-navbar-wrapper">
                    <Link to={"/"} className={`small-navbar-logo `}></Link>
                    <button onClick={toggleSidebar} className={`small-navbar-menu-button material-symbols-rounded`}>drag_handle</button>
                </div>
                <div className={`small-menu-container ${sideBarMenu()}`}>
                    <button onClick={toggleSidebar} className={`small-menu-close-button material-symbols-rounded`}>close</button>
                    <div className="small-menu-link-container">
                        <Link to={"/"} className={`small-navbar-link ${language}`}>{getText('aboutLink')}</Link>
                        <Link to={"/"} className={`small-navbar-link ${language}`}>{getText('workLink')}</Link>
                        <Link to={"/"} className={`small-navbar-link ${language}`}>{getText('blogLink')}</Link>
                        <Link to={"/"} className={`small-navbar-link ${language}`}>{getText('contractLink')}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
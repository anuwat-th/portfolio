import { Link } from "react-router-dom";

import "../styles/global/Global.scss"
import "../styles/components/NavbarStyle.scss"
import { getText } from "../constants/components/NavbarText";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useEffect, useState } from "react";


const Navbar = () => {

    const language = useSelector((state: RootState) => state.language.language);
    const [isTopView, setIsTopView] = useState<boolean>(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const topViewClass = (): string => isTopView ? 'white-theme' : 'black-theme';
    const sideBarMenu = (): string => isSideBarOpen ? 'open' : 'close';

    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
        document.body.style.overflow = isSideBarOpen ? 'auto' : 'hidden';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsTopView(window.scrollY === 0);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        const handleResize = () => {
            if (window.innerWidth > 512) {
                document.body.style.overflow = 'auto';
                setIsSideBarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="navbar">
            <div className={`large-navbar ${topViewClass()}`}>
                <div className='large-navbar-wrapper'>
                    <Link to={"/"} className={`large-navbar-logo  ${topViewClass()}`}></Link>
                    <Link to={"/"} className={`large-navbar-link  ${topViewClass()} ${language}`}>{getText('aboutLink')}</Link>
                    <Link to={"/"} className={`large-navbar-link  ${topViewClass()} ${language}`}>{getText('workLink')}</Link>
                    <Link to={"/"} className={`large-navbar-link  ${topViewClass()} ${language}`}>{getText('blogLink')}</Link>
                    <Link to={"/"} className={`large-navbar-link  ${topViewClass()} ${language}`}>{getText('contractLink')}</Link>
                </div>
            </div>
            <div className={`small-navbar ${topViewClass()}`}>
                <div className="small-navbar-wrapper">
                    <Link to={"/"} className={`small-navbar-logo  ${topViewClass()}`}></Link>
                    <button onClick={toggleSidebar} className={`small-navbar-menu-button material-symbols-rounded ${topViewClass()}`}>drag_handle</button>
                </div>
                <div className={`small-menu-container ${sideBarMenu()}`}>
                    <button onClick={toggleSidebar} className={`small-menu-close-button material-symbols-rounded ${topViewClass()}`}>close</button>
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
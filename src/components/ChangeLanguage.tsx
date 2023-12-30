import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/reducers/languageReducer";
import { RootState } from "../redux/store/store";

import "../styles/global/global.scss"
import "../styles/components/ChangeLanguageStyle.scss"

const ChangeLanguage = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (language === "en") {
            dispatch(setLanguage("th"));
        } else {
            dispatch(setLanguage("en"));
        }
    };

    const languageName = (): string => {
        if (language === "en") {
            return `ภาษาไทย`;
        } else {
            return `English`;
        }
    };

    return (
        <div className="change-language">
            <button className="change-language-container" onClick={handleClick}>
                <span className="change-language-icon material-symbols-rounded">language</span>
                <p className={`change-language-name ${language}`}>{languageName()}</p>
            </button>
        </div>
    );
};

export default ChangeLanguage;

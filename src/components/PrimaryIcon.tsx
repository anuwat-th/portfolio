import React, { useState } from 'react';
import "../styles/global/Global.scss";
import "../styles/components/PrimaryIconStyle.scss";

interface PrimaryIconProp {
    iconName: string;
    hoverTitle: string;
}

const PrimaryIcon: React.FC<PrimaryIconProp> = ({ iconName, hoverTitle }) => {
    const [isShowTitle, setIsShowTitle] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsShowTitle(true);
    };

    const handleMouseLeave = () => {
        setIsShowTitle(false);
    };

    return (
        <button
            className="primary-icon-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={`primary-icon ${iconName}`}></span>
            {isShowTitle ? <p className="primary-icon-title">{hoverTitle}</p> : null}
        </button>
    );
};

export default PrimaryIcon;

import React from 'react';
import "../styles/global/global.scss"
import "../styles/components/PrimaryIconStyle.scss"
interface PrimaryIconProp {
    iconName: string;
}

const PrimaryIcon: React.FC<PrimaryIconProp> = ({ iconName }) => {
    return (
        <div className="primary-icon-container">
            <span className={`primary-icon ${iconName}`}></span>
        </div>
    );
}

export default PrimaryIcon;

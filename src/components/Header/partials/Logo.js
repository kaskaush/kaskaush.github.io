import React from 'react';
import Profile from '../../../assets/profile-pic.png';

const Logo = ({ titleLabel, subLabel, ariaLabel }) => {
    return (
        <div className="header-work__logo-wrapper">
            <div className="header__profile-wrapper">
                <img src={Profile} alt="profile" className="header__profile-image" />
            </div>
            <a href="/home" className="header__logo" aria-label={ariaLabel}>
                <span>{titleLabel}</span>
                <span>{subLabel}</span>
            </a>
        </div>
    );
};

export default Logo;

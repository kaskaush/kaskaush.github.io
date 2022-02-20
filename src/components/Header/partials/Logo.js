import React from 'react';
import Profile from '../../../assets/profile-pic.png';

const Logo = ({ titleLabel, subLabel, ariaLabel }) => {
    const handleNav = () => {
        let section = document.getElementById('home');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="header-work__logo-wrapper">
            <div className="header__profile-wrapper">
                <img src={Profile} alt="profile" className="header__profile-image" />
            </div>
            <a
                href="/"
                className="header__logo"
                aria-label={ariaLabel}
                onClick={(e) => {
                    e.preventDefault();
                    handleNav();
                }}
            >
                <span>{titleLabel}</span>
                <span>{subLabel}</span>
            </a>
        </div>
    );
};

export default Logo;

import React from 'react';

const Logo = ({ titleLabel, subLabel, ariaLabel }) => {
    return (
        <div className="header-work__logo-wrapper">
            <a href="/home" className="header__logo" aria-label={ariaLabel}>
                <span>{titleLabel}</span>
                <span>{subLabel}</span>
            </a>
        </div>
    );
};

export default Logo;

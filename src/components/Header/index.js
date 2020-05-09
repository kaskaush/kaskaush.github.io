import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from './partials/Logo';
import NavMenu from './partials/NavMenu';
import SocialMenu from './partials/SocialMenu';
import Button from '../../core-components/Button';

const Header = ({ logo, navMenu, socialLinks }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header header-work ${isScrolled ? 'scroll-active' : ''}`}>
            <Logo {...logo} />
            <NavMenu data={navMenu} />
            <SocialMenu data={socialLinks} />
            <Button className="header__nav-menu-mobile">
                <FontAwesomeIcon icon={faBars} />
            </Button>
        </header>
    );
};

Header.propTypes = {};

export default Header;

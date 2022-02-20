import React, { useState, useEffect } from 'react';
import Logo from './partials/Logo';
import SocialMenu from './partials/SocialMenu';
import Overlay from '../../core-components/Overlay';
import throttle from 'lodash.throttle';
import NavMenu from './partials/NavMenu';
import Button from '../../core-components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ logo, navMenu, socialLinks }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [displayOverlay, setDisplayOverlay] = useState(false);

    const handleScroll = throttle(() => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, 300);

    const toggleOverlay = () => {
        setDisplayOverlay(!displayOverlay);
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
            {/* <Button className="header__nav-menu-mobile" onClick={toggleOverlay}>
                <FontAwesomeIcon icon={faBars} />
            </Button> */}
            {displayOverlay && (
                <Overlay withEscClose onClose={toggleOverlay}>
                    <NavMenu data={navMenu} />
                </Overlay>
            )}
        </header>
    );
};

Header.propTypes = {};

export default Header;

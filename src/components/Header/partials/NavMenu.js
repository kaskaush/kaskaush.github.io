import React from 'react';
import NavItem from '../../../core-components/NavItem';

const NavMenu = ({ data }) => {
    const handleNav = (url) => {
        let section = document.getElementById(url);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header-work__menu-wrapper">
            <ul className="header-work__menu-list">
                {data.map((item) => {
                    return (
                        <li key={item.label} className="header-work__menu-item">
                            <NavItem {...item} onClick={() => handleNav(item.url)} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavMenu;

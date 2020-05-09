import React from 'react';
import NavItem from '../../../core-components/NavItem';

const NavMenu = ({ data }) => {
    return (
        <div className="header-work__menu-wrapper">
            <ul className="header-work__menu-list">
                {data.map((item) => {
                    return (
                        <li key={item.label} className="header-work__menu-item">
                            <NavItem {...item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavMenu;

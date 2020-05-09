import React from 'react';

const NavItem = ({ label, url }) => {
    return (
        <a href={url} className="nav-item">
            {label}
        </a>
    );
};

export default NavItem;

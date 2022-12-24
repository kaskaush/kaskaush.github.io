import React from 'react';

const NavItem = ({ label, url, onClick }) => {
    return (
        <a
            tabIndex={0}
            href={url}
            className="nav-item"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {label}
        </a>
    );
};

export default NavItem;

import React, { memo } from 'react';

const Footer = ({ copyRight }) => {
    return (
        <footer className="footer">
            <div className="footer__copy-right-wrapper">
                <p className="footer__copy-right-text">{copyRight.text}</p>
            </div>
        </footer>
    );
};

export default memo(Footer);

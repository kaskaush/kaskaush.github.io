import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ type, url }) => {
    return (
        <a href={url} rel="noopener noreferrer" target="_blank" className="social-btn">
            <FontAwesomeIcon icon={type} />
        </a>
    );
};

export default SocialButton;

import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialButton from '../../../core-components/SocialButton';

const SocialMenu = ({ data }) => {
    const getIcon = (type) => {
        let iconType = '';
        switch (type) {
            case 'email':
                iconType = faEnvelope;
                break;

            case 'linkedIn':
                iconType = faLinkedinIn;
                break;

            case 'github':
                iconType = faGithub;
                break;

            case 'instagram':
                iconType = faInstagram;
                break;

            default:
                iconType = '';
                break;
        }

        return iconType;
    };

    return (
        <div className="header-work__social-links-wrapper">
            <ul className="header-work__social-links">
                {data.map((item) => {
                    return (
                        <li key={item.type} className="header-work__social-link-item">
                            <SocialButton url={item.url} type={getIcon(item.type)} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SocialMenu;

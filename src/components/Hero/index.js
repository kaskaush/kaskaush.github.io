import React, { memo } from 'react';
import { getDateDifference } from '../../utility/timeUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../core-components/Button';
import HeroImage from '../../assets/markus-spiske-hvSr_CVecVI-unsplash.jpeg';

const Hero = ({ title, description, careerStart }) => {
    const handleNavClick = () => {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    };

    const getDescription = () => {
        const diff = getDateDifference(careerStart, '', true);
        return description.replace('{num_years}', diff);
    };

    return (
        <div className="hero" id="home">
            <div className="hero-mask"></div>
            <div className="hero__image" style={{ background: `url(${HeroImage}) repeat fixed 100%` }}></div>
            <div className="hero__content">
                <h1 className="hero__title">
                    {title} <span class="wave">👋🏻</span>
                </h1>
                <div className="hero__description" dangerouslySetInnerHTML={{ __html: getDescription() }}></div>
            </div>
            <Button className="hero__scroll-btn" onClick={handleNavClick}>
                <FontAwesomeIcon icon={faChevronDown} />
            </Button>
        </div>
    );
};

export default memo(Hero);

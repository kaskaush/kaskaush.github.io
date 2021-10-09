import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../core-components/Button';
import HeroImage from '../../assets/markus-spiske-hvSr_CVecVI-unsplash.jpeg';

const Hero = ({ title, description }) => {
    const handleNavClick = () => {
        document.getElementById('skills-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero">
            <div className="hero-mask"></div>
            <div className="hero__image" style={{ backgroundImage: `url(${HeroImage})` }}></div>
            <div className="hero__content">
                <h1 className="hero__title">{title}</h1>
                <p className="hero__description">{description}</p>
            </div>
            <Button className="hero__scroll-btn" onClick={handleNavClick}>
                <FontAwesomeIcon icon={faChevronDown} />
            </Button>
        </div>
    );
};

export default Hero;

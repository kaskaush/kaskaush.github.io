import React, { memo } from 'react';
import { getDateDifference } from '../../utility/timeUtils';
import Button from '../../core-components/Button';

const Hero = ({ title, description, careerStart }) => {
    const handleNavClick = () => {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    };

    const getDescription = () => {
        const diff = getDateDifference(careerStart, '', true);
        return description.replace('{num_years}', diff);
    };

    return (
        <div className="hero" id="about">
            <div className="container">
                <div className="hero__content-wrapper">
                    <h1 className="hero__title">{title}</h1>
                    <div className="hero__description" dangerouslySetInnerHTML={{ __html: getDescription() }}></div>
                    <Button className="hero__cta" onClick={handleNavClick}>
                        Know more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default memo(Hero);

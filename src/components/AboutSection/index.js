import React from 'react';
import Section from '../../core-components/Section';

const AboutSection = ({ title, description }) => {
    return (
        <Section title={title}>
            <div className="about__description">
                <p>{description}</p>
            </div>
        </Section>
    );
};

export default AboutSection;

import React, { memo } from 'react';
import Section from '../../core-components/Section';
import ShowcaseCard from '../../core-components/ShowcaseCard';

const ExperienceSection = ({ title, data }) => {
    return (
        <Section title={title} id="experience">
            <div className="experience-section">
                {data &&
                    data.map((item) => {
                        return <ShowcaseCard key={item.company} company={item.company} image={item.image} />;
                    })}
            </div>
        </Section>
    );
};

export default memo(ExperienceSection);

import React from 'react';
import Section from '../../core-components/Section';
import ShowcaseCard from '../../core-components/ShowcaseCard';

const ExperienceSection = ({ title, data }) => {
    return (
        <Section title={title} inverse>
            <div className="experience-section">
                {data &&
                    data.map((item) => {
                        return (
                            <ShowcaseCard key={item.company} image={item.image}>
                                <div className="experience-section__content">
                                    <em className="experience-section__total-exp">{item.totalExp}</em>
                                    {item.roles &&
                                        item.roles.map((roleData) => {
                                            return (
                                                <>
                                                    <span className="experience-section__role-name">
                                                        {roleData.role}
                                                    </span>
                                                    <span className="experience-section__role-period">
                                                        {roleData.period}
                                                    </span>
                                                </>
                                            );
                                        })}
                                </div>
                            </ShowcaseCard>
                        );
                    })}
            </div>
        </Section>
    );
};

export default ExperienceSection;

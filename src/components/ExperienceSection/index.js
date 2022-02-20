import React, { Fragment } from 'react';
import Section from '../../core-components/Section';
import ShowcaseCard from '../../core-components/ShowcaseCard';
import { getDateDifference } from '../../utility/timeUtils';

const ExperienceSection = ({ title, data }) => {
    return (
        <Section title={title} inverse id="experience">
            <div className="experience-section">
                {data &&
                    data.map((item) => {
                        return (
                            <ShowcaseCard key={item.company} company={item.company} image={item.image}>
                                <div className="experience-section__content">
                                    <em className="experience-section__total-exp">
                                        {getDateDifference(item.start, item.end)}
                                    </em>
                                    {item.roles &&
                                        item.roles.map((roleData) => {
                                            return (
                                                <Fragment key={roleData.role}>
                                                    <span className="experience-section__role-name">
                                                        {roleData.role}
                                                    </span>
                                                    <span className="experience-section__role-period">
                                                        {roleData.period}
                                                    </span>
                                                </Fragment>
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

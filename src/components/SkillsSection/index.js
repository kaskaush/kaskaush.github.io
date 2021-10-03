import React from 'react';
import Section from '../../core-components/Section';
import ProgressBar from '../../core-components/ProgressBar';

const SkillsSection = ({ title, frontEnd, backEnd }) => {
    return (
        <Section title={title} id="skills-section">
            <div className="skills-section">
                <div className="skills-section__card">
                    {frontEnd &&
                        frontEnd.map((skill) => {
                            return <ProgressBar key={skill.name} name={skill.name} value={skill.scale} />;
                        })}
                </div>
                <div className="skills-section__card">
                    {backEnd &&
                        backEnd.map((skill) => {
                            return <ProgressBar key={skill.name} name={skill.name} value={skill.scale} />;
                        })}
                </div>
            </div>
        </Section>
    );
};

export default SkillsSection;

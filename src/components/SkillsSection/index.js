import React, { memo } from 'react';
import Section from '../../core-components/Section';
import SkillCard from '../../core-components/SkillCard';

const SkillsSection = ({ title, list }) => {
    return (
        <Section inverse title={title} id="skills">
            <div className="skills-section">
                {list &&
                    list.map((skill) => {
                        return (
                            <SkillCard key={skill.name} imgSrc={skill.name} label={skill.name} progress={skill.scale} />
                        );
                    })}
            </div>
        </Section>
    );
};

export default memo(SkillsSection);

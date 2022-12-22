import React, { memo } from 'react';
import Section from '../../core-components/Section';
import ProjectTile from '../../core-components/ProjectTile/ProjectTile';

const ProjectsSection = ({ projects }) => {
    return (
        <Section inverse title="Some Things I've Built" id="work">
            <div className="projects-section">
                {projects &&
                    projects.map((item) => {
                        return <ProjectTile {...item} key={item.title}/>;
                    })}
            </div>
        </Section>
    );
};

export default memo(ProjectsSection);

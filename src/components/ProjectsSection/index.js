import React, { memo } from 'react';
import Section from '../../core-components/Section';
import ProjectTile from '../../core-components/ProjectTile/ProjectTile';

const ProjectsSection = ({ projects }) => {
    return (
        <Section inverse title={'Projects'} id="projects">
            <div className="projects-section">
                {projects &&
                    projects.map((item) => {
                        return <ProjectTile {...item} />;
                    })}
            </div>
        </Section>
    );
};

export default memo(ProjectsSection);

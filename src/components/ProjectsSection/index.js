import React from 'react';
import Section from '../../core-components/Section';
import Swiper from '../../core-components/Swiper';
import ProjectCard from '../../core-components/ProjectCard';

const ProjectsSection = ({ projects }) => {
    return (
        <Section title={'Projects'} _class="projects-wrapper">
            <div className="projects-section">
                <Swiper>
                    {projects &&
                        projects.map((item) => {
                            return <ProjectCard key={item.title} _class="swiper-slide" {...item} />;
                        })}
                </Swiper>
            </div>
        </Section>
    );
};

export default ProjectsSection;

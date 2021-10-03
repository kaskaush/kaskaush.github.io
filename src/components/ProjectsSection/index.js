import React from 'react';
import Section from '../../core-components/Section';
import CustomSwiper from '../../core-components/Swiper';
import ProjectCard from '../../core-components/ProjectCard';
import { SwiperSlide } from 'swiper/react';

const ProjectsSection = ({ projects }) => {
    return (
        <Section title={'Projects'} _class="projects-wrapper">
            <div className="projects-section">
                <CustomSwiper>
                    {projects &&
                        projects.map((item) => {
                            return (
                                <SwiperSlide>
                                    <ProjectCard key={item.title} _class="swiper-slide" {...item} />
                                </SwiperSlide>
                            );
                        })}
                </CustomSwiper>
            </div>
        </Section>
    );
};

export default ProjectsSection;

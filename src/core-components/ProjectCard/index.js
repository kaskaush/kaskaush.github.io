import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from '../../core-components/Pill';

const ProjectCard = ({ _class, iconName, title, description, technologies, organization }) => {
    return (
        <div className={`project-card ${_class}`}>
            <div className="project-card__image-section">
                <FontAwesomeIcon icon={iconName} />
            </div>
            <div className="project-card__content-section">
                <h3 className="project-card__title">{title}</h3>
                <span className="project-card__organization">{organization}</span>
                <p className="project-card__description">{description}</p>
                <div className="project-card__pill-section">
                    {technologies &&
                        technologies.map((technology) => {
                            return <Pill key={technology} text={technology} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

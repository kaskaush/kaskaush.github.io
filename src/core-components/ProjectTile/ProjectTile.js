import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from '../Pill';

const randomHSL = () => {
    return `hsl(${~~(360 * Math.random())},90%,70%)`;
};

const ProjectTile = ({ _class, iconName, title, description, technologies, organization }) => {
    return (
        <div className={`project-tile ${_class || ''}`}>
            <div className="project-tile__image-section">
                <FontAwesomeIcon icon={iconName} color={randomHSL()} />
                <span className="project-tile__organization">{organization}</span>
            </div>
            <div className="project-tile__content-section">
                <h3 className="project-tile__title">{title}</h3>
                <p className="project-tile__description">{description}</p>
                <div className="project-tile__pill-section">
                    {technologies &&
                        technologies.map((technology) => {
                            return <Pill key={technology} text={technology} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default ProjectTile;

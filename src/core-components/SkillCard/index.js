import React from 'react';
import ProgressBar from '../ProgressBar';
import react from '../../assets/logos/reactjs.svg';
import next from '../../assets/logos/nextjs.svg';
import nest from '../../assets/logos/nestjs.svg';
import js from '../../assets/logos/js.svg';
import nodejs from '../../assets/logos/nodejs.svg';
import java from '../../assets/logos/java.svg';
import spring from '../../assets/logos/spring.svg';
import docker from '../../assets/logos/docker.svg';
import kubernetes from '../../assets/logos/kubernetes.svg';
import cssLogo from '../../assets/logos/css.svg';

const imagePath = {
    ReactJS: react,
    NextJS: next,
    NestJS: nest,
    JavaScript: js,
    CSS: cssLogo,
    NodeJS: nodejs,
    Java: java,
    Springboot: spring,
    Docker: docker,
    Kubernetes: kubernetes,
};

const SkillCard = ({ imgSrc, label, progress }) => {
    return (
        <div className="skill-card">
            <div className="skill-card__title-section">
                <img src={imagePath[imgSrc]} alt={label} className="skill-card__image" />
                <span>{label}</span>
            </div>
        </div>
    );
};

export default SkillCard;

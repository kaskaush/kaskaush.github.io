import React from 'react';

const imagePath = {
    react: 'devicon-react-original-wordmark',
    javascript: 'devicon-javascript-plain',
    nodejs: 'devicon-nodejs-plain-wordmark',
    java: 'devicon-java-plain-wordmark',
    spring: 'devicon-spring-original-wordmark',
    docker: 'devicon-docker-plain-wordmark',
    kubernetes: 'devicon-kubernetes-plain-wordmark',
    go: 'devicon-go-original-wordmark',
};

const SkillCard = ({ imgSrc, label, progress }) => {
    return (
        <div className="skill-card">
            <div className="skill-card__title-section">
                <i className={`skill-card__icon ${imagePath[imgSrc]}`}></i>
            </div>
        </div>
    );
};

export default SkillCard;

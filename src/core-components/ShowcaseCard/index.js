import React from 'react';

const ShowcaseCard = ({ image, children }) => {
    const { src, alt } = image;

    return (
        <div className="showcase-card">
            <div className="showcase-card__image-wrapper">
                <img src={src} alt={alt} className="showcase-card__image" />
            </div>
            <div className="showcase-card__content-wrapper">
                <div className="showcase-card__content-section">{children}</div>
            </div>
        </div>
    );
};

export default ShowcaseCard;

import React from 'react';
import byjus from '../../assets/logos/byjus.svg';
import infosys from '../../assets/logos/infosys.svg';
import ps from '../../assets/logos/ps.svg';
import oracle from '../../assets/logos/oracle.svg';
import ibm_cloud from '../../assets/logos/ibm_cloud.svg';

const imagePath = {
    byjus,
    infosys,
    'publicis sapient': ps,
    oracle,
    ibm_cloud
};

const ShowcaseCard = ({ image, children, company }) => {
    const { alt } = image;

    return (
        <div className="showcase-card">
            <div className="showcase-card__image-wrapper">
                <img src={imagePath[company]} alt={alt} className="showcase-card__image" />
            </div>
            <div className="showcase-card__content-wrapper">
                <div className="showcase-card__content-section">{children}</div>
            </div>
        </div>
    );
};

export default ShowcaseCard;

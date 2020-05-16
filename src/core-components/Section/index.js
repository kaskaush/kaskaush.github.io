import React from 'react';

const Section = ({ title, children, inverse }) => {
    return (
        <div className={`section ${inverse ? 'inverse' : ''}`}>
            <h3 className="section__title">{title}</h3>
            {children}
        </div>
    );
};

export default Section;

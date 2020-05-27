import React from 'react';

const Section = ({ title, children, inverse, _class }) => {
    return (
        <div className={`section ${inverse ? 'inverse' : ''} ${_class}`}>
            <h3 className="section__title">{title}</h3>
            {children}
        </div>
    );
};

export default Section;

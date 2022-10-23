import React, { useState } from 'react';
import IntersectionObserver from '../IntersectionObserver';

const Section = ({ title, children, inverse, _class, id }) => {
    const [isIntersected, setIsIntersected] = useState(false);
    const handleIntersection = () => {
        setIsIntersected(!isIntersected);
    };
    return (
        <IntersectionObserver onIntersection={handleIntersection}>
            <div className={`section ${_class || ''} ${isIntersected ? 'animate' : ''}`} id={id}>
                <div className="container">
                    <h2 className={`section__title ${inverse ? 'inverse' : ''}`}>
                        <span className={`section__title-text ${inverse ? 'inverse' : ''}`}>{title}</span>
                    </h2>
                    {children}
                </div>
            </div>
        </IntersectionObserver>
    );
};

export default Section;

import React, { useState } from 'react';
import IntersectionObserver from '../IntersectionObserver';

const Section = ({ title, children, inverse, _class, id }) => {
    const [isIntersected, setIsIntersected] = useState(false);
    const handleIntersection = () => {
        setIsIntersected(!isIntersected);
    };
    return (
        <IntersectionObserver onIntersection={handleIntersection}>
            <div
                className={`section ${inverse ? 'inverse' : ''} ${_class || ''} ${isIntersected ? 'animate' : ''}`}
                id={id}
            >
                <h3 className="section__title">{title}</h3>
                {children}
            </div>
        </IntersectionObserver>
    );
};

export default Section;

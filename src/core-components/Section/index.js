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
                <h2 className="section__title">{title}</h2>
                {children}
            </div>
        </IntersectionObserver>
    );
};

export default Section;

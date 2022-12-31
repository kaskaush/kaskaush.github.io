import React from 'react';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const Section = ({ title, children, inverse, _class, id }) => {
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '50px',
        threshold: 0.0,
    });

    return (
        <div ref={containerRef} className={`section ${_class || ''} ${isVisible ? 'animate' : ''}`} id={id}>
            <div className="container">
                <h2 className={`section__title ${inverse ? 'inverse' : ''}`}>
                    <span className={`section__title-text ${inverse ? 'inverse' : ''}`}>{title}</span>
                </h2>
                {children}
            </div>
        </div>
    );
};

export default Section;

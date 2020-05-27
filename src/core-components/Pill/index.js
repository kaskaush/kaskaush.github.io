import React from 'react';

const Pill = ({ text }) => {
    return (
        <div className="pill">
            <p className="pill__text">{text}</p>
        </div>
    );
};

export default Pill;

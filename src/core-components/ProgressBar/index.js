import React from 'react';

const ProgressBar = ({ name, value }) => {
    return (
        <div className="progress-bar">
            <span className="progress-bar__name">{name}</span>
            <div className="progress-bar__percent">
                <div className="progress-bar__progress" style={{ width: value }} title={value}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

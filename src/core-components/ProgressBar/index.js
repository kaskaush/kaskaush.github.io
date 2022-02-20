import React from 'react';

const ProgressBar = ({ value }) => {
    return (
        <div className="progress-bar">
            <div className="progress-bar__percent">
                <div className="progress-bar__progress" style={{ width: value }} title={value}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

import React from 'react';

const IconCross = ({ onClose, focusable = false, ariaLabel = 'close', isCircularIcon = false, dataTestId = '' }) => {
    const onCloseHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <button
            type="button"
            className={`icon-close-cross ${isCircularIcon ? 'icon-cross-circle' : ''}`}
            onClick={onCloseHandler}
            aria-label={ariaLabel}
            autoFocus={focusable}
            data-test-id={dataTestId}
        >
            <span className="icon-close-cross__x" />
        </button>
    );
};

export default IconCross;

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import IconCross from '../../core-components/IconCross';
import { focusTrap } from '../../utility/accessibilityUtils';

/**
 * Creates a new div element node and adds to document with given id.
 *
 * @param {*} nodeId id for the element
 * @returns true if node already exists with given id or adds a new node
 */
const injectPortalContainer = (nodeId) => {
    const el = document.createElement('div');

    el.setAttribute('id', nodeId);
    el.setAttribute('class', nodeId);
    const doesNodeExist = document.getElementById(nodeId);

    return doesNodeExist || document.body.appendChild(el);
};

const OverLay = ({
    onClose,
    children,
    title = '',
    overlayIdentifier = '',
    withHeader = true,
    _class,
    withEscClose = false,
}) => {
    const rootEl = useRef(null);
    const OVERLAY_CLOSE_DELAY = 250;
    const [isClosing, setIsClosing] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const overlayContentRef = useRef(null);
    const SCROLL_OFFSET = 3;
    const rootElement = injectPortalContainer('modal-root');

    useEffect(() => {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('modal-open');

        return () => {
            body.classList.remove('modal-open');
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const animateOverlayTitle = () => {
        const node = overlayContentRef.current;

        if (!animateTitle && node.scrollTop > SCROLL_OFFSET) {
            setAnimateTitle(true);
        } else if (animateTitle && node.scrollTop < SCROLL_OFFSET) {
            setAnimateTitle(false);
        }
    };

    useEffect(() => {
        if (overlayContentRef) {
            const node = overlayContentRef.current;

            node.addEventListener('scroll', animateOverlayTitle);
        }

        return () => {
            if (overlayContentRef) {
                overlayContentRef.current.removeEventListener('scroll', animateOverlayTitle);
            }
        };
    }, [animateOverlayTitle]);

    const onOverlayClose = () => {
        if (onClose) {
            setIsClosing(true);
            setTimeout(() => {
                onClose();
            }, OVERLAY_CLOSE_DELAY);
        }
    };

    /**
     * Handle esc key and tabbing events.
     * @param  {object} event event
     */
    const handleKeyboardNavigation = (event) => {
        // Handles clicking on escape key
        if (withEscClose && event.keyCode === 27) {
            onOverlayClose();
        } else {
            focusTrap(rootEl.current, event);
        }
    };

    /* Add or remove keyboard event listeners. */
    useEffect(() => {
        rootEl && rootEl.current && rootEl.current.focus();
        rootEl.current.addEventListener('keydown', handleKeyboardNavigation, false);
        return () => {
            rootEl.current.removeEventListener('keydown', handleKeyboardNavigation, false);
        };
    }, []);

    return createPortal(
        <div
            id={overlayIdentifier}
            className={`overlay-container ${_class} ${isClosing ? '--closing' : ''}`}
            ref={rootEl}
            role="dialog"
            aria-modal="true"
        >
            {withHeader && (
                <div className={`overlay-container__head ${animateTitle ? 'overlay-container__head--animated' : ''}`}>
                    <div className="overlay-container__close">
                        <IconCross focusable={false} onClose={onOverlayClose} ariaLabel="close overlay" />
                    </div>
                    <div className="overlay-container__title-block">
                        <div className="overlay-container__title-cont">
                            <h4
                                className={`overlay-container__title ${
                                    animateTitle ? 'overlay-container__title--animated' : ''
                                }`}
                            >
                                {title}
                            </h4>
                        </div>
                    </div>
                </div>
            )}
            <div className="overlay-container__content" ref={overlayContentRef}>
                {children}
            </div>
        </div>,
        rootElement
    );
};

export default OverLay;

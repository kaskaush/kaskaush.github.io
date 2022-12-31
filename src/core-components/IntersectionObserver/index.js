import { cloneElement, useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';

const WithIntersectionObserver = ({
    onIntersection = undefined,
    settings = {
        rootMargin: '50px',
        threshold: 0.0,
    },
    children = undefined,
    checkUserStopBy = false,
}) => {
    const [hasNodeIntersected, setHasNodeIntersected] = useState(false);
    const [interSectedNode, setInterSectedNode] = useState(null);
    const childNodeRef = useRef(null);
    let observer = null;
    let throttled = null;
    let isUserStoppedTimeout = null;

    useEffect(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const { isIntersecting, target } = entry;

                if (isIntersecting && !hasNodeIntersected) {
                    if (!checkUserStopBy) {
                        throttled = throttle(() => {
                            setHasNodeIntersected(true);
                            setInterSectedNode(target);
                        })();
                    } else {
                        isUserStoppedTimeout = setTimeout(() => {
                            setHasNodeIntersected(true);
                            observer.disconnect();
                            setInterSectedNode(target);
                        }, 1000);
                    }
                }

                if (isIntersecting === false && checkUserStopBy) {
                    if (isUserStoppedTimeout) {
                        clearTimeout(isUserStoppedTimeout);
                    }
                }
            });
        }, settings);

        observer.observe(childNodeRef.current);

        if (hasNodeIntersected && onIntersection && interSectedNode) {
            onIntersection(interSectedNode);
        }

        return () => {
            if (observer) {
                observer.disconnect();
                observer = null;
            }

            if (throttled) {
                throttled.cancel();
            }
        };
    }, [hasNodeIntersected, interSectedNode]);

    const compProps = { hasNodeIntersected, ref: childNodeRef, onIntersection };
    const ChildWithProp = cloneElement(children, { ...compProps });

    return ChildWithProp;
};

export default WithIntersectionObserver;

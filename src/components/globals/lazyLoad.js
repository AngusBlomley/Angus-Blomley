import React, { useState, useEffect, useRef } from 'react';
import { useLazyLoad } from './lazyLoadContext';

function LazyLoad({ children, id }) {
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);
    const { loadWork } = useLazyLoad();
    const scrollOffset = 0; // Adjust this value as needed

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            const entry = entries[0];
            if (entry.isIntersecting || (id === 'work' && loadWork)) {
                setIsInView(true);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Adjusted threshold value
        });

        const currentRef = containerRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [loadWork, id]);

    useEffect(() => {
        if (isInView && id === 'work') {
            // Delay the scroll adjustment slightly
            setTimeout(() => {
                window.scrollTo({
                    top: containerRef.current.offsetTop + scrollOffset,
                    behavior: 'smooth',
                });
            }, 300); // Adjust the delay as needed
        }
    }, [isInView, id, scrollOffset]);

    return <div ref={containerRef} id={id}>{isInView ? children : null}</div>;
}

export default LazyLoad;

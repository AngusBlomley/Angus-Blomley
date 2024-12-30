import React, { createContext, useContext, useState } from 'react';

const LazyLoadContext = createContext();

export const useLazyLoad = () => useContext(LazyLoadContext);

export const LazyLoadProvider = ({ children }) => {
    const [loadWork, setLoadWork] = useState(false);

    return (
        <LazyLoadContext.Provider value={{ loadWork, setLoadWork }}>
            {children}
        </LazyLoadContext.Provider>
    );
};

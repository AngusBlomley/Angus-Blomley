import React, { createContext, useContext, useState } from "react";

interface LazyLoadContextType {
  loadWork: boolean;
  setLoadWork: (value: boolean) => void;
}

const LazyLoadContext = createContext<LazyLoadContextType | undefined>(
  undefined
);

export const useLazyLoad = () => {
  const context = useContext(LazyLoadContext);
  if (!context) {
    throw new Error("useLazyLoad must be used within LazyLoadProvider");
  }
  return context;
};

export const LazyLoadProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loadWork, setLoadWork] = useState(false);

  return (
    <LazyLoadContext.Provider value={{ loadWork, setLoadWork }}>
      {children}
    </LazyLoadContext.Provider>
  );
};

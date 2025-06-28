import { createContext, useState, ReactNode } from 'react';

export const UIContext = createContext(undefined);

export const UIProvider = ({ children }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <UIContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

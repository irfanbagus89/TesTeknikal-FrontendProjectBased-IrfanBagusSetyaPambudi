import React from 'react';
import { UIProvider } from './UiContext';


export const AppProviders = ({ children }) => (
 <UIProvider>
      {children}
    </UIProvider>
);

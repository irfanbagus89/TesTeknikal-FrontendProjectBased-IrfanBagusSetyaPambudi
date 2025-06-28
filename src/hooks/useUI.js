import { useContext } from 'react';
import { UIContext } from '../contexts/UiContext';

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI harus digunakan dalam UIProvider');
  }
  return context;
};

/* eslint-disable no-shadow */
import { createContext, useContext, useState } from 'react';

// Create context
export const AppContext = createContext();

// Top-level Provider component
export function AppContextProvider({ children }) {
  const [categoryFilter, setCategoryFilter] = useState();
  const [system, setSystem] = useState('imperial');

  const context = {
    categoryFilter,
    setCategoryFilter,
    system,
    setSystem,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

// Function for using context
export function useAppContext() {
  return useContext(AppContext);
}

/* eslint-disable no-shadow */
import { createContext, useContext, useState } from 'react';

// Create context
export const AppContext = createContext();

// Top-level Provider component
export function AppContextProvider({ children }) {
  const [categoryFilter, setCategoryFilter] = useState();

  const context = {
    categoryFilter,
    setCategoryFilter,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

// Function for using context
export function useAppContext() {
  return useContext(AppContext);
}

/* eslint-disable no-shadow */
import { createContext, useContext, useReducer } from 'react';

const stateTemplate = {};

const initialState = { ...stateTemplate };

function reducer(state, action) {
  let newState;

  switch (action.type) {
    case 'ADD_ITEM':
      newState = { ...state, items: action.value };
      break;
    case 'RESET':
      newState = { ...initialState };
      break;
    default:
      newState = state;
  }

  return newState;
}

// Create context
export const AppContext = createContext();

// Top-level Provider component
export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    reset: () => {
      dispatch({ type: 'RESET' });
    },
  };

  return (
    // eslint-disable-next-line no-return-assign
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

// Function for using context
export function useAppContext() {
  return useContext(AppContext);
}
